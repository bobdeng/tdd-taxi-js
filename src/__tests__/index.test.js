import { main } from '../index.js';

test('parse default ', async () => {
  expect(await main())
    .toBe('6\n7\n13\n7');
});
