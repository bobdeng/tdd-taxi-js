import taxiFee from '../taxi';

test('小于两公里且无等待收费6元', () => {
  expect(taxiFee(2, 0)).toBe(6);
});

test('小于两公里且等待4分钟收费7元', () => {
  expect(taxiFee(2, 4)).toBe(7);
});

test('小于两公里且等待2分钟收费7元', () => {
  expect(taxiFee(2, 2)).toBe(7);
});

test('小于两公里且等待1分钟收费6元', () => {
  expect(taxiFee(2, 1)).toBe(6);
});

test('5公里收费8元', () => {
  expect(taxiFee(5, 0)).toBe(8);
});

test('8公里收费11元', () => {
  expect(taxiFee(8, 0)).toBe(11);
});

test('10公里收费13元', () => {
  expect(taxiFee(10, 0)).toBe(13);
});
