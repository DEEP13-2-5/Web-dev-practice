import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task)); // pass task as payload
      setTask(""); // reset input after submission
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task} // bind value to state
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
}
