// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to entry.txt.
// Pure Node stdlib, deterministic, no network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The lawmakers who just passed a 400-page act dictating exactly how AI must think, learn, and behave spent the morning emailing their aide — subject line 'URGENT!!!' — to ask how to turn the Word file into a PDF before the vote.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
