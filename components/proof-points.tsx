import type { ProofPoints as ProofPointsData } from '@/lib/schemas';

function Label({ children }: { children: string }) {
  return (
    <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
      {children}
    </p>
  );
}

// Shows whichever proof points exist, in a fixed order, with one set of labels.
// Renders nothing when there are none, so callers need no guards of their own.
export function ProofPoints({
  ownershipLine,
  beforeAfter,
  talkingPoint,
  bullets,
  className = '',
}: ProofPointsData & { className?: string }) {
  const hasBullets = bullets !== undefined && bullets.length > 0;
  if (!ownershipLine && !beforeAfter && !talkingPoint && !hasBullets) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {ownershipLine && (
        <div>
          <Label>OWNED</Label>
          <p className="text-sm leading-relaxed">{ownershipLine}</p>
        </div>
      )}

      {beforeAfter && (
        <div>
          <Label>BEFORE → AFTER</Label>
          <p className="text-sm leading-relaxed text-muted-foreground">{beforeAfter}</p>
        </div>
      )}

      {talkingPoint && (
        <div>
          <Label>TALKING POINT</Label>
          <p className="text-sm leading-relaxed italic text-primary">"{talkingPoint}"</p>
        </div>
      )}

      {hasBullets && (
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-sm leading-relaxed flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
