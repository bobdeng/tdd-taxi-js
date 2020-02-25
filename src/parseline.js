export function parseLine(line) {
  const reg = /(\d+)公里,等待(\d+)分钟/gi;
  return {
    distance: parseInt(line.replace(reg, '$1')),
    waitingMinutes: parseInt(line.replace(reg, '$2')),
  };
}
