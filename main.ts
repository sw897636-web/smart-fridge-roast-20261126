// Smart Fridge Roast — make.fun one-liner entry.
// Writes a single roast line (1-160 chars) to /output/entry.txt.
// Deterministic: the same bytes on every run. No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: the fridge flashes an ad for the ice cream already melting
// in your hand, then orders another tub — upselling the dessert you own.
// 156 characters, one line, one sentence.
const ENTRY =
  "My smart fridge flashed an ad for the mint-choc-chip tub dripping down my hand, then ordered another one — because one melting tub apparently wasn't enough.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file holds exactly the entry line.
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
