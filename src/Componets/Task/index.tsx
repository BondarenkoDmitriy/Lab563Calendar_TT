import React from 'react';
import './styles.scss';

const Task = ({task}) => {
    return (
      <div className="task">
        <h2>{task}</h2>
      </div>
    );
}
export default Task

