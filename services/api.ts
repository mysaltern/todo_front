import axios, { AxiosResponse } from 'axios';

// Configure base URL for the Laravel backend
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Export the `api` instance
export default api;

// Define the TODO type
interface Todo {
  id: number;
  title: string;
}

// Fetch all TODO items
export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response: AxiosResponse<Todo[]> = await api.get('/todo');
    
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];  // Return an empty array in case of error
  }
};

// Add a new TODO item
export const addTodo = async (title: string): Promise<Todo | null> => {
  try {
    const response: AxiosResponse<Todo> = await api.post('/todo/store', { title });
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    return null;  // Return null to indicate the operation failed
  }
};

// Delete a TODO item by ID
export const deleteTodo = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/todo/${id}`);
    return true;  // Indicate successful deletion
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    return false;  // Indicate failure to delete
  }
};
