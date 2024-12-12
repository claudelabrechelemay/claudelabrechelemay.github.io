import fs from 'fs';
import path from 'path';
import { filesize } from 'filesize';

const imageExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.bmp',
  '.webp',
  '.tiff',
  '.svg',
];

function scanDirectory(dir) {
  let imageCount = 0,
    totalSize = 0;
  const extensionCounts = {};

  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const {
        imageCount: count,
        totalSize: size,
        extensionCounts: exts,
      } = scanDirectory(fullPath);
      imageCount += count;
      totalSize += size;
      Object.entries(exts).forEach(([ext, count]) => {
        extensionCounts[ext] = (extensionCounts[ext] || 0) + count;
      });
    } else if (imageExtensions.includes(path.extname(entry.name).toLowerCase())) {
      imageCount++;
      const size = fs.statSync(fullPath).size;
      totalSize += size;
      const ext = path.extname(entry.name).toLowerCase();
      extensionCounts[ext] = (extensionCounts[ext] || 0) + 1;
    }
  });

  return { imageCount, totalSize, extensionCounts };
}

const { imageCount, totalSize, extensionCounts } = scanDirectory(
  path.resolve(process.argv[2]),
);
console.log(`Image Counts by Extension:`, extensionCounts);
console.log('Total:', imageCount);
console.log('Total Disk Space Used:', filesize(totalSize));
