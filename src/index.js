import { taxiFee } from './taxi';
import { readFileLines } from './readfile';
import { parseLine } from './parseline';

function getTaxiFee(line) {
  const taxi = parseLine(line);
  return taxiFee(taxi.distance, taxi.waitingMinutes);
}

export async function main(testDataFile = 'testData.txt') {
  const lines = await readFileLines(`src/fixtures/${testDataFile}`);
  const receipt = lines.map(getTaxiFee).join('\n');
  console.log(receipt);
  return receipt;
}

main();


