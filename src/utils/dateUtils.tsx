import Month from '../types/month';

export const getMonthFromNumber = (monthNumber: number): Month => {
  switch (monthNumber) {
    case 0:
      return Month.January;
    case 1:
      return Month.February;
    case 2:
      return Month.March;
    case 3:
      return Month.April;
    case 4:
      return Month.May;
    case 5:
      return Month.June;
    case 6:
      return Month.July;
    case 7:
      return Month.August;
    case 8:
      return Month.September;
    case 9:
      return Month.October;
    case 10:
      return Month.November;
    case 11:
      return Month.December;
    default:
      throw new Error(`Invalid month number: ${monthNumber}`);
  }
};
