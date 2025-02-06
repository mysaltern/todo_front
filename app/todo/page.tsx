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
  const handleAddTodo = async (title: string) => {
    const newTodo = await addTodo(title);
    if (!newTodo) return; // Prevent adding null to the array
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  

  // Delete TODO item by ID
  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">TODO List</h1>
    <TodoForm onAddTodo={handleAddTodo} />
    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
  </div>
  );
}
