import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
