import fs from 'fs';
import readline from 'readline';

function readFileInLines(file) {
  const fRead = fs.createReadStream(file);
  const objReadline = readline.createInterface({
    input: fRead,
  });
  return objReadline;
}

export default async function readFileLines(file) {
  return new Promise(resolve => {
    const objReadline = readFileInLines(file);
    const arr = [];
    objReadline.on('line', line => arr.push(line));
    objReadline.on('close', () => resolve(arr));
  });
}
