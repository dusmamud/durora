/* Resize Durora images to at most 2x their largest display width, q78 WebP.
 * Display widths read from the code:
 *  - artist portraits (cards max ~512px, artist page 50vw of 1152 = 576px) -> 1152w
 *  - sofia-lane: full-bleed spotlight 100vw (up to 1920) -> keep 1280w, re-encode
 *  - crowd: About panel max 768px (100vw < md) -> keep 1280w, re-encode
 *  - hero-stage: 100vw backdrop -> keep 1920w, re-encode
 *  - venue: Place max 768px -> 1536w
 *  - gallery-*: thumbnails max ~512px -> 1024w; originals copied to images/full/
 *    first so the lightbox still loads the full-size file.
 * Same filenames, no visual change. Run from ~/workspace/durora.
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "public", "images");
const BACKUP = "/tmp/durora-images-backup";
fs.mkdirSync(BACKUP, { recursive: true });
fs.mkdirSync(path.join(DIR, "full"), { recursive: true });

const JOBS = [
  // [file, target width (null = keep width, re-encode only)]
  ["nova-rey.webp", 1152],
  ["kairo.webp", 1152],
  ["luna-mara.webp", 1152],
  ["felix-brandt.webp", 1152],
  ["amara-sol.webp", 1152],
  ["sofia-lane.webp", null],
  ["crowd.webp", null],
  ["hero-stage.webp", null],
  ["venue.webp", 1536],
  ["gallery-daytime-crowd.webp", 1024],
  ["gallery-ferris-sunset.webp", 1024],
  ["gallery-night-crowd.webp", 1024],
  ["gallery-stage-closeup.webp", 1024],
];

(async () => {
  for (const [file, width] of JOBS) {
    const src = path.join(DIR, file);
    const before = fs.statSync(src).size;
    fs.copyFileSync(src, path.join(BACKUP, file));
    if (file.startsWith("gallery-")) {
      fs.copyFileSync(src, path.join(DIR, "full", file));
    }
    const meta = await sharp(src).metadata();
    const w = width && meta.width > width ? width : meta.width;
    const tmp = src + ".tmp";
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(tmp);
    fs.renameSync(tmp, src);
    const after = fs.statSync(src).size;
    console.log(
      `${file}: ${meta.width}x${meta.height} ${before}B -> ${w}w ${after}B (${Math.round((1 - after / before) * 100)}% smaller)`,
    );
  }
  console.log("DONE. Originals backed up to", BACKUP);
})().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
