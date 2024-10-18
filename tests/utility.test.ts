import { DateUtilities } from '../src/utility'

const utils = new DateUtilities()

test('isLeapYear - true', () => {
  expect(utils.isLeapYear(2024)).toBe(true);
});

test('isWeekend - true (Sunday)', () => {
  const date = new Date(2024, 9, 20); // October 20, 2024 (Sunday)
  expect(utils.isWeekend(date)).toBe(true);
});

test('startOfDay', () => {
  const date = new Date(2024, 9, 16, 15, 30); // October 16, 2024, 3:30 PM
  const result = utils.startOfDay(date);
  expect(result.getHours()).toBe(0);
  expect(result.getMinutes()).toBe(0);
});

test('endOfDay', () => {
  const date = new Date(2024, 9, 16, 15, 30); // October 16, 2024, 3:30 PM
  const result = utils.endOfDay(date);
  expect(result.getHours()).toBe(23);
  expect(result.getMinutes()).toBe(59);
});