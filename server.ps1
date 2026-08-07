Add-Type -AssemblyName System.Web

$port = 8000
$root = "c:\Users\kunal\Downloads\Website TASK"
$ip = [System.Net.IPAddress]::Any
$listener = New-Object System.Net.Sockets.TcpListener($ip, $port)
$listener.Start()

Write-Host "=================================================="
Write-Host " TASK Phone & PC Server Active:"
Write-Host " - PC Localhost:  http://localhost:$port/"
Write-Host " - Phone Link:    http://192.168.0.100:$port/"
Write-Host "=================================================="

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        
        $requestLine = $reader.ReadLine()
        if (-not $requestLine) {
            $client.Close()
            continue
        }
        
        $parts = $requestLine.Split(" ")
        $method = $parts[0]
        $rawPath = if ($parts.Length -gt 1) { $parts[1] } else { "/" }
        
        # Read remaining headers
        while ($line = $reader.ReadLine()) {
            if ($null -eq $line -or $line.Trim() -eq "") { break }
        }
        
        $localPath = $rawPath.Split("?")[0]
        if ($localPath -eq "/" -or [string]::IsNullOrWhiteSpace($localPath)) {
            $localPath = "/index.html"
        }
        
        # Decode URL path (e.g. %20 -> space)
        $decodedPath = [System.Web.HttpUtility]::UrlDecode($localPath)
        $filePath = [System.IO.Path]::Combine($root, $decodedPath.TrimStart('/'))
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".json" { "application/json" }
                default { "application/octet-stream" }
            }
            
            $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
            
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFound = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: 13`r`nConnection: close`r`n`r`n404 Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFound)
            $stream.Write($buffer, 0, $buffer.Length)
        }
        
        $stream.Flush()
        $client.Close()
    }
} finally {
    $listener.Stop()
}
