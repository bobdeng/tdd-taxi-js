import taxiFee from './taxi';
import readFileLines from './readfile';
import parseLine from './parseline';

function getTaxiFee(line) {
  const taxi = parseLine(line);
  return taxiFee(taxi.distance, taxi.waitingMinutes);
}

export default async function main(testDataFile = 'testData.txt') {
  const lines = await readFileLines(`src/fixtures/${testDataFile}`);
  return lines.map(getTaxiFee).join('\n');
}
main();
