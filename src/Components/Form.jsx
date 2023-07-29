import { useState } from "react";

export default function Form({ addTodo }) {
  const [formInput, setFormInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formInput === "") return;

    addTodo(formInput);

    setFormInput("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="form-input">Your Todo: </label>
      <input
        type="text"
        id="form-input"
        onChange={(e) => setFormInput(e.target.value)}
        value={formInput}
      />
      <button>Add Todo</button>
    </form>
  );
}
