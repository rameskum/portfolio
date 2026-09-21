import { readFileSync } from 'fs';
import { join } from 'path';
import { ProfileSchema, type Profile } from './schemas';

// Minimal frontmatter parser for flat `key: value` blocks (no new deps).
// Values may be plain, single-quoted, or double-quoted scalars.
function parseMarkdownFile(source: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error('content/profile.md is missing a frontmatter block');
  }
  const data: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}

// Single source of truth for profile copy, parsed from content/profile.md
// at build time. Server-only: do not import this from client components
// (fs/path are Node builtins and cannot be bundled for the browser).
export const profile: Profile = (() => {
  const raw = readFileSync(join(process.cwd(), 'content', 'profile.md'), 'utf-8');
  const { data, body } = parseMarkdownFile(raw);
  return { ...ProfileSchema.parse(data), bio: body };
})();
