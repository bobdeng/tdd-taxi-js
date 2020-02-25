import {readFileLines} from '../readfile.js'

test('正确读取文件', async () => {
  expect(await readFileLines('src/fixtures/testData.txt')).toStrictEqual([
    '1公里,等待0分钟',
    '3公里,等待0分钟',
    '10公里,等待0分钟',
    '2公里,等待3分钟'
  ]);
});
