import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  return (
    <>
      <h1>My To Dos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="write your to do..."
        />
        <button>Add to do</button>
        <hr />
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </form>
    </>
  );
}

export default TodoList;
