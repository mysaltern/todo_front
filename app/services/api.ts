import axios from 'axios';

// Configure base URL for the Laravel backend
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Fetch all TODO items
export const fetchTodos = async () => {
  const response = await api.get('/todo');
  return response.data;
};

// Add a new TODO item
export const addTodo = async (title: string) => {
  const response = await api.post('/todo/store', { title });
  return response.data;
};

// Delete a TODO item by ID
export const deleteTodo = async (id: number) => {
  await api.delete(`/todo/${id}`);
}; 
