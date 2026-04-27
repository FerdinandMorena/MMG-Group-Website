import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  console.log('🔍 Scanning for images to optimize...');

  const imageFiles = [];

  // Find all image files in public directory
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          imageFiles.push(filePath);
        }
      }
    }
  }

  scanDirectory(publicDir);

  console.log(`📸 Found ${imageFiles.length} images to optimize`);

  for (const imagePath of imageFiles) {
    const relativePath = path.relative(publicDir, imagePath);
    const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    try {
      // Check if WebP version already exists
      if (fs.existsSync(webpPath)) {
        console.log(`⏭️  Skipping ${relativePath} (WebP already exists)`);
        continue;
      }

      console.log(`🔄 Converting ${relativePath} to WebP...`);

      // Convert to WebP with optimization
      await sharp(imagePath)
        .webp({
          quality: 85,
          effort: 6,
        })
        .toFile(webpPath);

      // Get file sizes for comparison
      const originalSize = fs.statSync(imagePath).size;
      const webpSize = fs.statSync(webpPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

      console.log(`✅ Converted ${relativePath} (${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);

    } catch (error) {
      console.error(`❌ Failed to convert ${relativePath}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(console.error);