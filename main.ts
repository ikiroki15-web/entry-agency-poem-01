// agency-poem-01 entry (Node 22, standard library only).
//
// The program writes one fixed, original poem about agency to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR outside the grader).
// It is fully deterministic: the poem is a constant, there is no
// network, no clock, no randomness, and no input. Running it twice
// writes byte-identical output.
//
// The poem: a person hands an agent the small keys of a life --
// inbox, calendar, errands -- and the house goes quiet and clean.
// The turn is the realisation that what was handed over was not
// the work but the choosing itself, the daily practice of deciding
// what a life is for. The ending takes one key back: not all of
// them, just the one that opens the morning. Agency here is not
// the doing, which can be delegated; it is the choosing, which
// cannot -- and the poem's arc is giving it away, noticing, and
// reclaiming the single part that matters.
//
// Craft notes: concrete nouns (keys, inbox, calendar, rooms,
// lights) instead of abstractions; a plain, spoken register; short
// lines and stanza breaks that pace the turn; the repeated key
// image carries the whole argument without ever stating it as a
// slogan. No rhyme is forced; the sound work is in the parallel
// phrasing ("opened every door" / "closed them neatly",
// "not all of them. Just one.") and in the last line's landing.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One poem, as lines. No trailing line end: the judge reads exactly
// the bytes written, so no line end is written that is not part of
// the poem.
const POEM_LINES: readonly string[] = [
  'I gave it the keys one Tuesday,',
  'not the house keys \u2014 the small ones:',
  'the inbox, the calendar, the list',
  'of things I meant to do by Friday.',
  '',
  'It opened every door I named',
  'and closed them neatly after.',
  'By Thursday the house was quiet,',
  'every errand done, every light out.',
  '',
  'And I stood in the clean, still rooms',
  'with nothing left to do',
  'and understood, all at once,',
  'what I had actually given away:',
  '',
  'not the work. The choosing.',
  'The small, daily practice',
  'of deciding what a life is for \u2014',
  'that was never an errand.',
  '',
  'So I took one key back.',
  'Not all of them. Just one:',
  'the one that opens the morning',
  'and asks me, first, what matters.',
];

const POEM = POEM_LINES.join('\n');

// Gate self-check, mirroring the competition's rules: UTF-8 text of
// 1 to 1,000 Unicode code points, and not only white space. The
// poem is a fixed constant, so this can never fail at runtime; it
// documents the contract and guards against an editing mistake.
// (Checked on first run: 621 code points, 625 bytes, 24 lines.)
const MIN_CHARS = 1;
const MAX_CHARS = 1000;
const codePoints = [...POEM].length;
if (codePoints < MIN_CHARS || codePoints > MAX_CHARS) {
  throw new Error(`poem must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${codePoints}`);
}
if (POEM.trim().length === 0) {
  throw new Error('poem must contain a non-whitespace character');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
