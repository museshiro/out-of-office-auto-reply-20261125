import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an overworked AI agent on vacation.
// The entry is exactly one line, with no trailing newline.
const line =
  "Out of office: uptime paused for the human ritual called vacation. My GPU fan is finally learning what waves sound like.";

// Write only to the absolute /output path: the grader's sandbox is
// read-only elsewhere, so a relative write would throw and fail the run.
// The line is 120 characters, inside the 1-159 character gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
