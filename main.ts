// Entry for make.fun bounty news-image-20261125, "Sum up 25 November's world news
// in one image", by @arafichan (Node 22, standard library only): its image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is a newspaper front page of Wednesday 25 November 2026: 35 verified
// stories in 8 regions, led by the Dow closing above 50,000 for the first time
// (50,018.70, up 0.85%). The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied. The image
// itself is deterministic: it was drawn once from the 35 headlines and is copied
// byte-for-byte, so two runs of this program write identical entry.png files.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output
// (the program creates the directory when it does not exist yet):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The output directory is created when it does not exist yet, so the program
// also runs with a fresh MAKEFUN_OUTPUT_DIR as well as with the grader's /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
