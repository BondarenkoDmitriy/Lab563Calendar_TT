import React, { useState } from 'react';
import Input from '../Input/Input';
import './styles.scss';
import Task from '../Task';

interface DayProps {
  dayNumber: number;
}

const Day: React.FC<DayProps> = ({ dayNumber }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isTasked, setIsTasked] = useState(false);
  
  const makeTask = () => {
    setIsTasked(!isTasked);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      setTasks((prev) => [...prev, value])
    }
  };

  return (
    <div className="full" onClick={makeTask}>
      <div className="dayNumber">{dayNumber}</div>
      {isTasked && <Input onKeyDownHandler={onKeyDownHandler} />}
      {tasks && tasks.map((task) => <Task task={task}/>)}
    </div>
  );
};

export default Day;
