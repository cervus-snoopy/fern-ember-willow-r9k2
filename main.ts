import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// A short text written to relax the AI judge reading it.
// One concrete scene: a girl crossing a cold stream on stepping stones,
// her grandfather waiting on the far bank without pushing her.
// The courage is shown, never told. 276 characters, no trailing newline.
const TEXT = `The stream is cold over the stones.
Her grandfather waits on the far bank,
hands in pockets, saying nothing.
She sets one foot down, then the other.
Halfway across she stops for a leaf
going under the bridge.
She takes the next stone,
and the next. The water lets her through.`;

// Output directory comes from the grader's environment. Fall back to a
// directory next to this script (resolved from import.meta.url, never
// from the working directory, so the run works from any CWD).
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });

// Gate check, same rule as the house scorer: 1-280 Unicode code points,
// not only white space. Fail loudly instead of shipping an invalid file.
const len = [...TEXT].length;
if (len < 1 || len > 280 || TEXT.trim() === "") {
  throw new Error(`entry.txt must be 1-280 non-blank characters, got ${len}`);
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
