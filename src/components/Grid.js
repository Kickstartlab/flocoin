import React from "react";

const Grid = ({ spacing = 150 }) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const verticalCount = Math.ceil(vw / spacing) + 1;
  const horizontalCount = Math.ceil(vh / spacing) + 1;

  const verticalLines = Array.from({ length: verticalCount }, (_, i) => ({
    left: `${i * spacing}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 3}s`
  }));

  const horizontalLines = Array.from({ length: horizontalCount }, (_, i) => ({
    top: `${i * spacing}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${6 + Math.random() * 3}s`
  }));

  return (
    <div className="lines">
      {verticalLines.map((line, i) => (
        <div
          key={`v-${i}`}
          className="vline"
          style={{
            left: line.left,
            "--delay": line.delay,
            "--duration": line.duration
          }}
        ></div>
      ))}
      {horizontalLines.map((line, i) => (
        <div
          key={`h-${i}`}
          className="hline"
          style={{
            top: line.top,
            "--delay": line.delay,
            "--duration": line.duration
          }}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
