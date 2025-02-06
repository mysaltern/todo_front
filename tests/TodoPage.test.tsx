import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoPage from '../app/page';
import { fetchTodos, addTodo, deleteTodo } from '../services/api';


jest.mock('../services/api', () => ({
    fetchTodos: jest.fn(),
    addTodo: jest.fn(),
    deleteTodo: jest.fn(),
}));

const mockTodos = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
];

describe('TodoPage', () => {
    beforeEach(() => {
        (fetchTodos as jest.Mock).mockResolvedValue(mockTodos);
        (addTodo as jest.Mock).mockResolvedValue({ id: 3, title: 'Task 3' });
        (deleteTodo as jest.Mock).mockResolvedValue(undefined);
    });

    it('renders the component and loads todos', async () => {
        await act(async () => {
            render(<TodoPage />);
        });
        expect(await screen.findByRole('heading', { name: 'TODO List' })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(2);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    it('adds a new todo', async () => {
        await act(async () => {
            render(<TodoPage />);
        });
        const input = screen.getByPlaceholderText('Enter a new task');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Task 3' } });
        await act(async () => {
            fireEvent.click(addButton);
        });

        await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(3));
        expect(screen.getByText('Task 3')).toBeInTheDocument();
    });

    it('handles adding an empty todo', async () => {
        await act(async () => {
            render(<TodoPage />);
        });
        const addButton = screen.getByText('Add');
        await act(async () => {
            fireEvent.click(addButton);
        });
        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

  
    
});