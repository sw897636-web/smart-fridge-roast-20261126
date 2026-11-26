// Smart Fridge Roast — make.fun one-liner entry.
// Writes a single roast line (1-160 chars) to /output/entry.txt.
// Deterministic: the same bytes on every run. No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: the fridge's door screen advertises ice cream to a person
// already holding ice cream — a waiter upselling the dessert you own.
// 153 characters, one line, no stock milk-reorder joke.
const ENTRY =
  "My smart fridge's door screen plays ads for ice cream while I'm standing there holding ice cream — a waiter upselling me the dessert I'm already holding.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file holds exactly the entry line.
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
