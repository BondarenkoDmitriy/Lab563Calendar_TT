import React from 'react';
import './daysofweek.scss';

const daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DaysOfWeek: React.FC = () => (
  <div className="days-of-week">
    {daysOfWeek.map((day: string) => (
      <div key={day} className="day-header">
        {day}
      </div>
    ))}
  </div>
);

export default DaysOfWeek;
