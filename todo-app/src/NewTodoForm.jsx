import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './styles/NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: uuid(), task });
    setTask('');
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;