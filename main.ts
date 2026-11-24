import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line roast: a phone battery that clocks out like an employee.
const LINE =
  "My phone's battery dies at 4 p.m. sharp every day, like it's clocking out of a job it never applied for.";

const MAX_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  if (LINE.length > MAX_LENGTH) {
    throw new Error(
      `Roast line is ${LINE.length} characters, over the ${MAX_LENGTH}-character limit.`,
    );
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
