#!/usr/bin/env node
/**
 * Pre-optimizes gallery images: resizes to max 1200px width, converts to WebP.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "public/images/photo-gallery";
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function optimizeImages() {
  const files = await readdir(INPUT_DIR);
  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
  const images = files.filter((f) => imageExts.has(extname(f).toLowerCase()));

  console.log(`Found ${images.length} images to optimize`);
  let saved = 0;

  for (const file of images) {
    const inputPath = join(INPUT_DIR, file);
    const info = await stat(inputPath);
    const originalSize = info.size;

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Skip if already small enough
      if (metadata.width && metadata.width <= MAX_WIDTH && originalSize < 200_000) {
        continue;
      }

      const buffer = await image
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

      // Only replace if smaller
      if (buffer.length < originalSize) {
        // Write back as optimized JPEG
        const outputPath = join(
          INPUT_DIR,
          basename(file, extname(file)) + ".jpg"
        );
        await sharp(buffer).toFile(outputPath);

        // Remove original if extension changed
        if (outputPath !== inputPath) {
          const { unlink } = await import("fs/promises");
          await unlink(inputPath);
        }

        const pct = ((1 - buffer.length / originalSize) * 100).toFixed(0);
        console.log(
          `  ${file}: ${(originalSize / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB (-${pct}%)`
        );
        saved += originalSize - buffer.length;
      }
    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
    }
  }

  console.log(
    `\nDone! Total saved: ${(saved / 1024 / 1024).toFixed(1)} MB`
  );
}

optimizeImages();
