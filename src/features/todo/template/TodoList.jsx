import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoInfo from '../component/TodoInfo';

const TodoList = ({ list, onDelete, onComplete, onChange }) => {
  return (
    <div>
      {list.map((todoitem, index) => (
        <TodoInfo
          info={todoitem}
          key={index}
          onDelete={() => onDelete(index)}
          onComplete={completed => onComplete(index, completed)}
          onChange={text => onChange(index, text)}
        />
      ))}
    </div>
  );
};

export default TodoList;
