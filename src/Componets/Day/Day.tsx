/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Input from '../Input/Input';

interface DayProps {
  dayNumber: number;
}

const Day: React.FC<DayProps> = ({ dayNumber }) => {
  const [task, setTask] = useState('');
  const [isTasked, setIsTasked] = useState(false);

  return (
    <div className="day" onClick={setIsTasked(!isTasked)}>
      {dayNumber}
      {isTasked && <Input onChangeTask={setTask} />}
    </div>
  );
};

export default Day;
