import { DateFormatter } from '../src/format';

const formatter = new DateFormatter();

test('formatDate - MM-DD-YYYY', () => {
  const date = new Date(2024, 9, 16); // October 16, 2024
  const result = formatter.formatDate(date, 'MM-DD-YYYY');
  expect(result).toBe('10-16-2024');
});

test('formatDate - YYYY-MM-DD', () => {
  const date = new Date(2024, 9, 16);
  const result = formatter.formatDate(date, 'YYYY-MM-DD');
  expect(result).toBe('2024-10-16');
});
