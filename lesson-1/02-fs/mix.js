// const fs = require("node:fs/promises");

// async function main() {
//   const data = await fs.readFile("unknown.txt", { encoding: "utf-8" });
//   const transformedDate = data.toUpperCase();
//   await fs.writeFile("mix.txt", transformedDate);
// }

// main().catch((error) => console.error(error));
const { error } = require("node:console");
const fs = require("node:fs/promises");

async function main() {
  const data = await fs.readFile("mix.txt", { encoding: "utf-8" });
  const transformedDate = data.toUpperCase();
  await fs.writeFile("mix.txt", transformedDate);
}

main().catch((error) => console.error(error));
