import './styles/Todo.css';

const Todo = ({ id, task, removeTodo }) => {
  return (
    <div className="Todo">
      <span>{task}</span>
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default Todo;