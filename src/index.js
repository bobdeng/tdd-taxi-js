import { taxiFee } from './taxi';

const fs = require('fs');
const readline = require('readline');

function getLineTaxFee(line) {
  const taxi = parseLine(line);
  return taxiFee(taxi.distance, taxi.waitingMinutes);
}

export default async function main(testDataFile = 'testData.txt') {
  const lines = await readFileLines('src/fixtures/' + testDataFile);
  const receipt = lines.map(getLineTaxFee)
    .join('\n');
  console.log(receipt);
  return receipt;
}

async function readFileLines(file) {
  return new Promise((resolve, reject) => {
    const fRead = fs.createReadStream(file);
    const objReadline = readline.createInterface({
      input: fRead,
    });
    var arr = new Array();
    objReadline.on('line', function (line) {
      arr.push(line);
    });
    objReadline.on('close', function () {
      resolve(arr);
    });
  });
}

main();

export function parseLine(line) {
  const reg = /(\d+)公里,等待(\d+)分钟/ig;
  return {
    distance: parseInt(line.replace(reg, '$1')),
    waitingMinutes: parseInt(line.replace(reg, '$2')),
  };
}
