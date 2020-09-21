import React, { useState } from 'react';
import TodoEditter from './TodoEditter';

const TodoInfo = ({ info, onDelete, onComplete, onChange }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <TodoEditter onChange={onChange} onClick={() => setIsEdit(false)} />
      ) : (
        <div>
          <div>{info.completed ? '완료' : [info.text]}</div>
          <button onClick={() => onComplete(!info.completed)}>완료</button>
          <button onClick={() => setIsEdit(true)}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default TodoInfo;
