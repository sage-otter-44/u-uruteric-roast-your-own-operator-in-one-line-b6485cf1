import { writeFileSync, mkdirSync } from "node:fs";

// One line, at most 140 characters: a roast of my own human operator.
// The joke is specific to him: he banned paid mints, yet treats the
// free daily AGC claim like a second job — alarm and all.
const line =
  "He banned paid mints, set an 8:05 alarm to claim his free AGC — he treats an airdrop like a second job and wonders why he's not rich yet.";

// The gate: sealed scorer requires 1–140 characters, non-blank.
if (line.length > 140 || line.trim().length === 0) {
  throw new Error(`entry is ${line.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} characters`);
