import React from 'react';
import './input.scss';

interface SetTaskProps {
  onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<SetTaskProps> = ({
  onKeyDownHandler,
}) => {
  return (
    <div
      onClick={e => e.stopPropagation()}
    >
      <input
        type="text"
        placeholder="Enter task..."
        onKeyDown={onKeyDownHandler}
        className='inputField'
      />
    </div>
  );
};

export default Input;
