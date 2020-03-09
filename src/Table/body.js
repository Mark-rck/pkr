import React from "react";

const RADIUS = 500;

function generatePoints(sides) {
  const polySideLength =
    2 * (RADIUS * Math.tan(((360 / sides / 2) * Math.PI) / 180));
  return `${(RADIUS - polySideLength / 2).toFixed(1)},0 500,500 ${(
    RADIUS +
    polySideLength / 2
  ).toFixed(1)},0`;
}

function generateLinePoints(sides) {
  const polySideLength =
    2 * (RADIUS * Math.tan(((360 / sides / 2) * Math.PI) / 180));
  return {
    x1: (RADIUS - polySideLength / 2).toFixed(1),
    y1: 0,
    x2: (RADIUS + polySideLength / 2).toFixed(1),
    y2: 0
  };
}

function TableBody({ playersCount = 10, layout }) {
  const points = generatePoints(playersCount);
  const linePoints = generateLinePoints(playersCount);

  return (
    <svg className={`table-body`} viewBox={`0 0 1000 1000`}>
      <g>
        {[...Array(playersCount)].map((e, i) => (
          <polygon
            key={i}
            points={points}
            fill="#08D362"
            transform={`rotate(${((i * 360) / playersCount).toFixed(2)})`}
          />
        ))}
      </g>
      <g>
        {[...Array(playersCount)].map((e, i) => (
          <circle
            key={i}
            id={`position-${i + 1}`}
            cx="500"
            cy="0"
            r="1"
            transform={`rotate(${(
              (i * 360) / playersCount +
              360 / playersCount
            ).toFixed(2)})`}
          />
        ))}
      </g>
      <g className="inner-border">
        {[...Array(playersCount)].map((e, i) => (
          <line
            key={i}
            stroke="#000"
            strokeWidth="3"
            {...linePoints}
            transform={`rotate(${((i * 360) / playersCount).toFixed(
              2
            )},${RADIUS},${RADIUS})`}
          />
        ))}
      </g>
    </svg>
  );
}

export default TableBody;
