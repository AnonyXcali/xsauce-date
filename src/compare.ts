import { IDateComparer } from './types';

class DateComparer implements IDateComparer {
  isBefore(date1: Date, date2: Date): boolean {
    return date1.getTime() < date2.getTime();
  }

  isAfter(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
  }

  compareDates(date1: Date, date2: Date): number {
    let time1 = date1.getTime();
    let time2 = date2.getTime();

    if (time1 === time2) {
      return 0;
    }

    return time1 > time2 ? 1 : -1;
  }
}

export { DateComparer };
