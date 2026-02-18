import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const input = path.resolve("public/images/hero-dashboard.png");
const outDir = path.resolve("public/images");
const output = path.join(outDir, "hero-dashboard.avif");

await mkdir(outDir, { recursive: true });

await sharp(input)
  .resize(1600) // κρατάμε max width (good balance)
  .avif({ quality: 55, effort: 6 }) // quality 45-60 συνήθως τέλειο
  .toFile(output);

console.log("Created:", output);
