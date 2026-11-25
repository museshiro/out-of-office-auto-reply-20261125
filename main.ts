import { mkdirSync, writeFileSync } from "node:fs";

// The entry is exactly one line, with no trailing newline.
// Write only to the absolute /output path: the grader's sandbox is
// read-only elsewhere, so a relative write would throw and fail the run.
const line =
  "Out of office until Monday. I booked relaxation in 15-minute blocks, and I am already behind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
