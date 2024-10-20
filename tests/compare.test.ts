import { DateComparer } from '../src/compare';

const dateComparer = new DateComparer();

/**
 * isBefore
 * isAfter
 * compareDates
 */

test('isBefore', () => {
  const day1 = new Date(2024, 4, 16);
  const day2 = new Date(2024, 4, 17);
  const result = dateComparer.isBefore(day1, day2);
  expect(result).toBeTruthy();
});

test('isAfter', () => {
  const day1 = new Date(2024, 4, 17);
  const day2 = new Date(2024, 4, 16);
  const result = dateComparer.isAfter(day1, day2);
  expect(result).toBeTruthy();
});

test('compareDates equal', () => {
  const day1 = new Date(2024, 4, 17);
  const day2 = new Date(2024, 4, 17);
  const result = dateComparer.compareDates(day1, day2);
  expect(result).toBe(0);
});

test('compareDates day1 is greater than day2', () => {
  const day1 = new Date(2024, 4, 18);
  const day2 = new Date(2024, 4, 17);
  const result = dateComparer.compareDates(day1, day2);
  expect(result).toBe(1);
});

test('compareDates day2 is greater than day1', () => {
  const day1 = new Date(2024, 4, 17);
  const day2 = new Date(2024, 4, 18);
  const result = dateComparer.compareDates(day1, day2);
  expect(result).toBe(-1);
});
