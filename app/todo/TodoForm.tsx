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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded">
        Add
      </button>
    </form>
  );
}
