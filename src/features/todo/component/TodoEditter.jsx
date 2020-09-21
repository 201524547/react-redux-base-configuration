import React, { useState } from 'react';

const TodoEditter = ({ onChange, onClick }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onChange(text);
          onClick();
        }}
      >
        확인
      </button>
    </div>
  );
};

export default TodoEditter;
