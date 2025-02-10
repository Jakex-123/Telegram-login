import { execSync } from 'child_process';
import fs from 'fs';

const extension = process.platform === 'win32' ? '.exe' : '';

const rustInfo = execSync('rustc -vV').toString();
const match = /host: (\S+)/.exec(rustInfo);
if (!match) {
  console.error('Failed to determine platform target triple');
  process.exit(1);
}
const targetTriple = match[1];

// Determine the correct binary name
const platformBinaryName = process.platform === 'win32' ? 'index-win.exe' : 'index-linux';
const targetBinaryName = `index-${targetTriple}${extension}`;

// Ensure the source file exists before renaming
const sourcePath = `src-tauri/binaries/${platformBinaryName}`;
const targetPath = `src-tauri/binaries/${targetBinaryName}`;

if (fs.existsSync(sourcePath)) {
  fs.renameSync(sourcePath, targetPath);
  console.log(`Renamed ${sourcePath} to ${targetPath}`);
} else {
  console.error(`Binary not found: ${sourcePath}`);
  process.exit(1);
}
