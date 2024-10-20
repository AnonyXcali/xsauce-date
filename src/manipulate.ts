import { IDateManipulator } from './types';

class DateManipulator implements IDateManipulator {
  addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }

  subtractDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(date.getDate() - days);
    return result;
  }
}

export { DateManipulator };
