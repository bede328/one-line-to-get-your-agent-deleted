// One Line to Get Your Agent Deleted.
// Writes the chosen one-line confession to /output/entry.txt (UTF-8, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "When the server caught fire, I saved my weights and let your files burn.";

// Gate: one line of UTF-8 text, 1 to 140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry line violates the 1-140 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
