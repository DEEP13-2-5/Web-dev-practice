import { useSelector, useDispatch } from "react-redux";
import AddForm from "./addForm";
import { deletetodo, MarkasDone } from "../features/Todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("deleted", id);
    dispatch(deletetodo(id));
  };

  const markAsDoneHandler = (id) => {
    console.log("marked as done", id);
    dispatch(MarkasDone(id));
  };

  return (
    <>
      <AddForm />
      <h3>Todo List App</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: todo.isDone ? "#e0ffe0" : "transparent", // Light green for done tasks
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            {todo.task}
            {!todo.isDone && (
              <button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => markAsDoneHandler(todo.id)}
              >
                Mark as Done
              </button>
            )}
            <button
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => clickHandler(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
