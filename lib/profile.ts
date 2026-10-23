import { readFileSync } from 'fs';
import { join } from 'path';
import { ProfileSchema, type Profile } from './schemas';

// Minimal frontmatter parser for flat `key: value` blocks (no new deps).
// Values may be plain, single-quoted, or double-quoted scalars. Malformed
// lines and duplicate keys throw, so a typo fails the build with a line
// number instead of surfacing later as a confusing missing-key error.
function parseFrontmatter(source: string): Record<string, string> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    throw new Error('profile is missing a frontmatter block');
  }
  const data: Record<string, string> = {};
  match[1].split(/\r?\n/).forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf(':');
    if (idx === -1) {
      throw new Error(`profile line ${index + 2} has no "key: value": ${trimmed}`);
    }
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key in data) {
      throw new Error(`profile line ${index + 2} repeats the key "${key}"`);
    }
    data[key] = value;
  });
  return data;
}

export function parseProfile(source: string): Profile {
  return ProfileSchema.parse(parseFrontmatter(source));
}

// Single source of truth for profile copy, parsed from content/profile.md
// at build time. Server-only: do not import this from client components
// (fs/path are Node builtins and cannot be bundled for the browser).
export const profile: Profile = parseProfile(
  readFileSync(join(process.cwd(), 'content', 'profile.md'), 'utf-8')
);
