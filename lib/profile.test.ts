import { describe, expect, it } from 'vitest';
import { parseProfile, profile } from './profile';

const fields = {
  name: 'Ada',
  headline: 'Engineer | Math: Machines',
  jobTitle: 'Engineer',
  identityStack: 'A · B',
  statusLabel: 'ENGINEER',
  yearsOfExperience: '"10+"',
  summary: "'Short summary'",
  metaDescription: 'Meta',
};

const doc = (lines: string[]) => `---\n${lines.join('\n')}\n---\nBody text that is ignored.\n`;
const lines = Object.entries(fields).map(([k, v]) => `${k}: ${v}`);

describe('parseProfile', () => {
  it('parses plain, quoted and colon-containing values', () => {
    const parsed = parseProfile(doc(lines));
    expect(parsed.headline).toBe('Engineer | Math: Machines');
    expect(parsed.yearsOfExperience).toBe('10+');
    expect(parsed.summary).toBe('Short summary');
  });

  it('handles CRLF line endings and comments', () => {
    const source = doc(['# a comment', '', ...lines]).replace(/\n/g, '\r\n');
    expect(parseProfile(source).name).toBe('Ada');
  });

  it('does not expose the body', () => {
    expect(parseProfile(doc(lines))).not.toHaveProperty('bio');
  });

  it('throws without a frontmatter block', () => {
    expect(() => parseProfile('name: Ada')).toThrow(/frontmatter/);
  });

  it('throws on a line with no colon, naming the line', () => {
    expect(() => parseProfile(doc(['name Ada', ...lines.slice(1)]))).toThrow(/line 2 has no/);
  });

  it('throws on a repeated key, naming the line', () => {
    expect(() => parseProfile(doc([...lines, 'name: Other']))).toThrow(/line 10 repeats the key "name"/);
  });

  it('throws when a required field is missing', () => {
    expect(() => parseProfile(doc(lines.slice(1)))).toThrow();
  });
});

describe('profile', () => {
  it('keeps the locked identity copy', () => {
    expect(profile.headline).toBe(
      'Senior Backend & Data Engineer | Java, Data Platforms & Cloud Modernization'
    );
    expect(profile.yearsOfExperience).toBe('10+');
  });
});
