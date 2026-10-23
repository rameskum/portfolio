import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ProofPoints } from './proof-points';

const html = (props: Parameters<typeof ProofPoints>[0]) => renderToStaticMarkup(<ProofPoints {...props} />);

describe('ProofPoints', () => {
  it('renders nothing when there are no proof points', () => {
    expect(html({})).toBe('');
    expect(html({ bullets: [] })).toBe('');
  });

  it('renders every field it is given, with one set of labels', () => {
    const out = html({
      ownershipLine: 'Owned the loader',
      beforeAfter: 'Slow to fast',
      talkingPoint: 'Why config-driven?',
      bullets: ['One', 'Two'],
    });
    expect(out).toContain('OWNED');
    expect(out).toContain('BEFORE → AFTER');
    expect(out).toContain('TALKING POINT');
    expect(out).not.toContain('INTERVIEW');
    expect(out.match(/<li/g)).toHaveLength(2);
  });

  it('skips the fields that are absent', () => {
    const out = html({ bullets: ['Only bullets'] });
    expect(out).not.toContain('OWNED');
    expect(out).not.toContain('TALKING POINT');
  });
});
