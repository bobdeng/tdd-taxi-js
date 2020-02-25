import { parseLine } from '../parseline';

test('1公里,等待2分钟，读取公里返回1公里2分钟', () => {
  expect(parseLine('1公里,等待2分钟'))
    .toStrictEqual({
      distance: 1,
      waitingMinutes: 2,
    });
});
