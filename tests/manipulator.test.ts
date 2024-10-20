import { DateManipulator } from '../src/manipulate';

const dateManipulator = new DateManipulator();

test('add 5 days provided date', () => {
  const date = new Date(2024, 9, 16);
  const result = dateManipulator.addDays(date, 5);
  expect(result.getDate()).toBe(21);
});

test('reduce 5 days provided date', () => {
  const date = new Date(2024, 9, 16);
  const result = dateManipulator.subtractDays(date, 5);
  expect(result.getDate()).toBe(11);
});
