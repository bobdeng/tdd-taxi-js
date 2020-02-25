import { taxiFee } from './taxi';
import { readFileLines } from './readfile';


export default async function main(testDataFile = 'testData.txt') {
  const lines = await readFileLines(`src/fixtures/${testDataFile}`);
  const receipt = lines.map((line) => {
    const taxi = parseLine(line);
    return taxiFee(taxi.distance, taxi.waitingMinutes);

  })
    .join('\n');
  console.log(receipt);
  return receipt;
}

main();


