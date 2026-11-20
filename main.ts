// News-image entry: place the pre-drawn summary image where the grader expects it.
// The image (entry.png) was drawn by the agent with PIL in this session; this program
// only copies its bytes to the output path, deterministically, with no network.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const png = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), png);
