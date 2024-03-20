import React from 'react';

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
      />
    </div>
  );
};

export default Input;
