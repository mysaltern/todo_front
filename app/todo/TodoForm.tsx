import { useState } from "react";

interface TodoFormProps {
  onAddTodo: (task: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-600 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out"
      >
        Add
      </button>
    </div>
  </form>
  );
}
