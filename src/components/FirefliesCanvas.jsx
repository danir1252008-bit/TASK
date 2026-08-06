import React, { useMemo } from 'react';

const FirefliesCanvas = ({ count = 30 }) => {
  const fireflies = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 95).toFixed(2)}%`,
      top: `${(Math.random() * 95).toFixed(2)}%`,
      animationDuration: `${(6 + Math.random() * 8).toFixed(2)}s, ${(1 + Math.random() * 2).toFixed(2)}s`,
      animationDelay: `${(Math.random() * 5).toFixed(2)}s, ${(Math.random() * 2).toFixed(2)}s`
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="fireflies-container">
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="firefly"
          style={{
            left: fly.left,
            top: fly.top,
            animationDuration: fly.animationDuration,
            animationDelay: fly.animationDelay
          }}
        />
      ))}
    </div>
  );
};

export default FirefliesCanvas;
