/**
 * Format for date types
 */
export type DateStringFormat = "MM-DD-YYYY" | "DD-MM-YYYY" | "YYYY-MM-DD"

/**
 * Date formatting Interface
 */
export interface IDateFormatter {
  formatDate(date: Date, format: DateStringFormat): string
}

/**
 * Date manipulator Interface
 */
export interface IDateManipulator {
  addDays(date: Date, days: number): Date
  subtractDays(date: Date, days: number): Date
}

/**
 * Date Comparer Interface
 */
export interface IDateComparer {
  isBefore(date1: Date, date2: Date ): boolean
  isAfter(date1: Date, date2: Date ): boolean
  compareDates(date1: Date, date2: Date ): number
}

/**
 * Date Utility Interface
 */
export interface Utility {
  isLeapYear(year: number): boolean;
  isWeekend(date: Date): boolean;
  startOfDay(date: Date): Date;
  endOfDay(date: Date): Date;
}

