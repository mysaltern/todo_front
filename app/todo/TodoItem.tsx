interface Todo {
    id: number;
    title: string;
  }
  
  interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
  }
  
  export default function TodoItem({ todo, onDeleteTodo }: TodoItemProps) {
    return (
      <li className="flex justify-between items-center mb-2">
        <span className="text-white">{todo.title}</span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </li>
    );
  }
  