import { useEffect, useState } from "react";
import "./style.css";
import Form from "./Components/Form";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    return localValue == null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const handleCompletedTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const addTodo = (inputValue) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
      },
    ]);
  };

  return (
    <div className="main">
      <Form addTodo={addTodo} />
      <ul>
        {todos.length > 0 ? (
          <Todo
            todos={todos}
            deleteTodo={deleteTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        ) : (
          <span>No todos!</span>
        )}
      </ul>
    </div>
  );
}

export default App;
