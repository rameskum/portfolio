import type { ComponentType } from 'react';

const CREAM = '#f5f4ec';
const MUTED = '#a8a29e';

const TD_STAGES = [
  'Source APIs',
  'Config-driven Loader',
  'Spring Boot Services',
  'Kafka · Data Processing',
  'Spark · Databricks',
  'Delta Lake · Unity Catalog',
];

const NODE_W = 260;
const NODE_H = 54;
const NODE_X = (400 - NODE_W) / 2;
const GAP = 28;
const START_Y = 18;
const CX = 200;

export function TDPipelineDiagram({ className }: { className?: string }) {
  const totalH = START_Y * 2 + TD_STAGES.length * NODE_H + (TD_STAGES.length - 1) * GAP;
  return (
    <svg
      viewBox={`0 0 400 ${totalH}`}
      className={className}
      role="img"
      aria-label="Data pipeline architecture: Source APIs, config-driven loader, Spring Boot services, Kafka data processing, Spark and Databricks, Delta Lake with Unity Catalog"
    >
      {TD_STAGES.map((stage, i) => {
        const y = START_Y + i * (NODE_H + GAP);
        return (
          <g key={stage}>
            <rect
              x={NODE_X}
              y={y}
              width={NODE_W}
              height={NODE_H}
              rx={10}
              fill="currentColor"
              fillOpacity={0.08}
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <text
              x={CX}
              y={y + 33}
              textAnchor="middle"
              fill={CREAM}
              fontSize={14}
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            >
              {stage}
            </text>
            {i < TD_STAGES.length - 1 && (
              <g stroke={MUTED} strokeWidth={1.5}>
                <line x1={CX} y1={y + NODE_H} x2={CX} y2={y + NODE_H + GAP} />
                <polygon
                  points={`${CX},${y + NODE_H + GAP} ${CX - 5},${y + NODE_H + GAP - 8} ${CX + 5},${y + NODE_H + GAP - 8}`}
                  fill={MUTED}
                  stroke="none"
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function TDBeforeAfter({ className }: { className?: string }) {
  const barX = 120;
  const beforeW = 200;
  const afterW = 20;
  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      role="img"
      aria-label="Before and after: file-upload processing time reduced from 20 minutes to under 2 minutes, ten times faster"
    >
      <text
        x={16}
        y={52}
        fill={MUTED}
        fontSize={12}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        letterSpacing={2}
      >
        BEFORE
      </text>
      <rect x={barX} y={34} width={beforeW} height={30} rx={8} fill="#57534e" />
      <text
        x={barX + beforeW + 10}
        y={56}
        fill={CREAM}
        fontSize={15}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        20 min
      </text>

      <text
        x={16}
        y={112}
        fill={MUTED}
        fontSize={12}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        letterSpacing={2}
      >
        AFTER
      </text>
      <rect x={barX} y={94} width={afterW} height={30} rx={8} fill="currentColor" />
      <text
        x={barX + afterW + 10}
        y={116}
        fill={CREAM}
        fontSize={15}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        {'<2 min'}
      </text>

      <text
        x={16}
        y={190}
        fill="currentColor"
        fontSize={34}
        fontWeight={700}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        10× faster
      </text>
      <text
        x={16}
        y={216}
        fill={MUTED}
        fontSize={13}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        file-upload processing time
      </text>
    </svg>
  );
}

export const caseVisuals: Record<string, ComponentType<{ className?: string }>> = {
  'td-architecture': TDPipelineDiagram,
  'td-before-after': TDBeforeAfter,
};
