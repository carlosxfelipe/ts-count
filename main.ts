import "./grapheme";
import "./utf8";

const examples = [
  "🇧🇷",
  "👨‍👩‍👧‍👦",
  "café",
  "a\u0301", // a + acento
];

for (const str of examples) {
  console.log(
    `Original: "${str}" | length: ${str.length} | count: ${str.count} | utf8Count: ${str.utf8Count} bytes`,
  );
}
