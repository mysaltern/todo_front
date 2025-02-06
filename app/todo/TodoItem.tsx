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
      <li className="flex justify-between items-center mb-3 bg-gray-800 p-3 rounded-lg shadow-sm">
      <span className="text-white font-medium">{todo.title}</span>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md transition-all duration-200 ease-in-out"
      >
        Delete
      </button>
    </li>
    );
  }
  