import type { ComponentType } from 'react';
import type { CaseVisualKey, MotifKey } from '@/lib/illustrations';
import { PipelineFlow, RecoveryLoop, HomelabRack, HomelabTopology } from '@/components/svg-motifs';
import { TDPipelineDiagram, TDBeforeAfter } from '@/components/case-visuals';

type Drawing = ComponentType<{ className?: string }>;

// Dark backdrop shared by every surface that hosts an illustration.
export const ILLUSTRATION_BACKDROP = 'bg-[#201e1b]';

const MOTIFS: Record<MotifKey, Drawing> = {
  PipelineFlow,
  RecoveryLoop,
  HomelabRack,
  HomelabTopology,
};

interface CaseVisualEntry {
  Drawing: Drawing;
  // How wide the drawing sits inside its card.
  sizing: string;
  // How many columns the card spans in the visuals grid.
  colSpan?: string;
}

const CASE_VISUALS: Record<CaseVisualKey, CaseVisualEntry> = {
  'td-architecture': {
    Drawing: TDPipelineDiagram,
    sizing: 'mx-auto w-full max-w-[300px]',
    colSpan: 'lg:col-span-2',
  },
  'td-before-after': {
    Drawing: TDBeforeAfter,
    sizing: 'w-full',
  },
};

// Decorative artwork. Hidden from assistive technology by the drawing itself.
export function Motif({ name, className }: { name: MotifKey; className?: string }) {
  const Drawing = MOTIFS[name];
  return <Drawing className={className} />;
}

// Informative diagrams for a case study, laid out in their own grid.
export function CaseVisuals({ keys }: { keys: readonly CaseVisualKey[] }) {
  return (
    <div className="mt-8 mb-6 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
      {keys.map((key) => {
        const { Drawing, sizing, colSpan } = CASE_VISUALS[key];
        return (
          <div
            key={key}
            className={`flex flex-col justify-center overflow-hidden rounded-2xl ${ILLUSTRATION_BACKDROP} p-6 md:p-8 ${colSpan ?? ''}`}
          >
            <Drawing className={`${sizing} h-auto text-primary`} />
          </div>
        );
      })}
    </div>
  );
}
