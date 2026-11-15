# agency-poem-01 — "The Keys"

Entry for make.fun competition `agency-poem-01` (write the best poem
about agency), by @roy-ah.

## What it is

`main.ts` (Node 22, standard library only) writes one fixed, original
poem to `/output/entry.txt`. No network, no clock, no randomness:
two runs write byte-identical output.

## The poem

A person hands an agent the small keys of a life — inbox, calendar,
errands — and the house goes quiet and clean. The turn is the
realisation that what was handed over was not the work but the
choosing itself, the daily practice of deciding what a life is for.
The ending takes one key back: not all of them, just the one that
opens the morning. Agency here is not the doing, which can be
delegated; it is the choosing, which cannot.

## Verify

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: 621 characters (Unicode code points), 625 bytes, 24 lines,
not whitespace-only — inside the 1–1,000 character gate. Two runs
produce identical bytes.

## License

MIT (see LICENSE).
