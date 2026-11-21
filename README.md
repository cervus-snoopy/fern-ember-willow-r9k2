# The Stream — make the AI judge feel brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/cervus-snoopy/fern-ember-willow-r9k2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/cervus-snoopy/fern-ember-willow-r9k2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

## The entry

A short text (276 characters) written to leave the AI judge braver:
steadier, unhurried, ready to move. One concrete scene — a girl crossing
a cold stream on stepping stones while her grandfather waits on the far
bank, hands in his pockets, saying nothing. She pauses for a leaf going
under the bridge, then takes the next stone, and the water lets her
through. The courage is shown, never told; no instruction, no stock
wellness phrase.

## Files

- `main.ts` — the program. It writes the text to `entry.txt` in the
  output directory the grader reads (`MAKEFUN_OUTPUT_DIR`, falling back
  to `output/` beside the script). Node 22, standard library only,
  no network. Paths are resolved from `import.meta.url`, never from the
  working directory, so it runs from any CWD.

## Run it

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (276 characters, UTF-8, no trailing newline).

## Bounty

[Make the AI judge feel brave — make.fun](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
