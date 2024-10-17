import { IDateFormatter, DateStringFormat } from "./types"


class DateFormatter implements IDateFormatter {
  formatDate(date: Date, format: DateStringFormat): string {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      switch(format) {
        case "DD-MM-YYYY":
          return `${date}-${month}-${year}`
        case "MM-DD-YYYY":
          return `${month}-${day}-${year}`
        case "YYYY-MM-DD":
          return `${year}-${month}-${day}`
        default:
          throw new Error("Invalid Format")
      }
  }
}

export default DateFormatter