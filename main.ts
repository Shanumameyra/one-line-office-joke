// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// Writes this entry's single line to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace. This line is 117.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "This meeting could have been an email, but then the email would have needed a meeting to explain why it was an email.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
