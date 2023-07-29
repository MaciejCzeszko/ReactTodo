export default function Todo({ todos, handleCompletedTodo, deleteTodo }) {
  return todos.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        id={todo.id}
        onChange={() => handleCompletedTodo(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  ));
}
