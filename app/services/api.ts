import axios from 'axios';

// Configure base URL for the Laravel backend
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
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
