/* eslint-disable no-console */
import React from 'react';
import DaysOfWeek from '../DaysOfWeek/DaysOfWeek';
import './calendarGrid.scss';
import Day from '../Day/Day';

interface CalendarGridProps {
  currentMonthName: string;
  currentYear: number;
  firstDayOfMonth: number;
  daysInMonth: number;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonthName,
  currentYear,
  firstDayOfMonth,
  daysInMonth,
}) => {
  const renderCalendarGrid = (): JSX.Element[] => {
    const calendarGrid: JSX.Element[] = [];
    let dayCounter = 1;

    const startDayOfWeek = (firstDayOfMonth + 6) % 7;

    for (let i = 0; i < 6; i += 1) {
      const week: JSX.Element[] = [];

      for (let j = 0; j < 7; j += 1) {
        if ((i === 0 && j < startDayOfWeek) || dayCounter > daysInMonth) {
          week.push(
            <div key={`${i}-${j}`} className="calendar-cell empty-cell" />,
          );
        } else {
          week.push(
            <div key={`${i}-${j}`} className="calendar-cell">
              <Day dayNumber={dayCounter} />
            </div>,
          );
          dayCounter += 1;
        }
      }

      calendarGrid.push(
        <div key={i} className="calendar-row">
          {week}
        </div>,
      );
    }

    return calendarGrid;
  };

  return (
    <div className="calendar-grid">
      <h1 className="month-year">
        {currentMonthName} {currentYear}
      </h1>
      <DaysOfWeek />
      {renderCalendarGrid()}
    </div>
  );
};

export default CalendarGrid;
