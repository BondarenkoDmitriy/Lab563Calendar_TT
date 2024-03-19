import React from 'react';
import './calendar.scss';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import Month from '../../types/month';
import { getMonthFromNumber } from '../../utils/dateUtils';

const Calendar: React.FC = () => {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth();
  const currentMonthName: Month = getMonthFromNumber(currentMonth);
  const daysInMonth: number = new Date(
    currentYear,
    currentMonth + 1,
    0,
  ).getDate();
  const firstDayOfMonth: number = new Date(
    currentYear,
    currentMonth,
    1,
  ).getDay();

  return (
    <div className="calendar-container">
      <CalendarGrid
        currentMonthName={currentMonthName}
        currentYear={currentYear}
        firstDayOfMonth={firstDayOfMonth}
        daysInMonth={daysInMonth}
      />
    </div>
  );
};

export default Calendar;
