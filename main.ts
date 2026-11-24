// The Dog Ate My Homework: Funniest Excuse — entry program.
//
// Writes the dog's one-line excuse to /output/entry.txt and prints it.
// The output is a fixed constant, so every run produces byte-identical text.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The excuse itself: the dog found homework addressed to it ("ruff draft")
// and opened the letter the only way a dog can. One line, under 200 chars,
// in the dog's own voice, from a dog who believes it did nothing wrong.
const DOGS_EXCUSE =
  "It said 'ruff draft' right on top — that's my name in homework language, " +
  "so obviously it was addressed to me. I opened it. With my teeth.";

function checkExcuse(line: string): void {
  // The gate requires 1-200 characters of real text, no whitespace-only line.
  if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
    throw new Error(`Entry line is ${line.length} chars; must be 1-200.`);
  }
}

function main(): void {
  checkExcuse(DOGS_EXCUSE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, DOGS_EXCUSE, "utf8");
  console.log(DOGS_EXCUSE);
}

main();
