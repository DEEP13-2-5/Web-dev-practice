import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([{ task: "sampletask", id: uuidv4(),isDone:false}]);
  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (newTodo.trim()) {
      setTodoList([...todoList, { task: newTodo, id: uuidv4(),isDone:false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
  };

  const MarkAllDone = () => {
    setTodoList((prevTodoList) => prevTodoList.map((todo) => ({
      ...todo,
      isDone:true,
    })));
  };

  const Markasdone = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo,isDone:true };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <button onClick={addTask}>Add task</button>
      <br />
      <br />
      <br />
      <hr />
      <h2>Todo Task</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"Line-through"}:{}}>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => Markasdone(todo.id)}>Mark done</button>
          </li>
        ))}
      </ul>
      <button onClick={MarkAllDone}>Mark all</button>
    </div>
  );
}
