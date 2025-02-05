"use client";

import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { fetchTodos, addTodo, deleteTodo } from "../services/api";

interface Todo {
  id: number;
  title: string;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load TODO items on page load
  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    };
    loadTodos();
  }, []);

  // Add new TODO item
  const handleAddTodo = async (task: string) => {
    const newTodo = await addTodo(task);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Delete TODO item by ID
  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
