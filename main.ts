// The Printer Apology
// program/v1 entry: writes a single apology line to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees 118 characters of UTF-8 text, inside the 1-120 limit.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry I jammed. You feed me paper thinner than your deadlines and swear at me, so I've unionised. Print this yourself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
// Verify what was actually written: re-read and compare byte for byte.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== LINE) {
  throw new Error("verification failed: entry.txt does not match the line");
}
