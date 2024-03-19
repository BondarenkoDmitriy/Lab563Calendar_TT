import React from 'react';

interface SetTaskProps {
  setTask: (value: string) => void;
}

const Input: React.FC<SetTaskProps> = ({ setTask }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = event.target?.value;

      setTask(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Enter task..."
      />
    </div>
  );
};

export default Input;
