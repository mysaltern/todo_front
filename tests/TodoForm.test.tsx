import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from '../app/todo/TodoForm';

describe('TodoForm', () => {
    let mockOnAddTodo: jest.Mock;

    beforeEach(() => {
        mockOnAddTodo = jest.fn();
    });

    it('submits the form with valid input', () => {
        render(<TodoForm onAddTodo={mockOnAddTodo} />);
        const input = screen.getByPlaceholderText('Enter a new task') as HTMLInputElement; // Type assertion
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        expect(mockOnAddTodo).toHaveBeenCalledWith('New Task');
        expect(input.value).toBe('');
    });

    it('does not submit the form with empty input', () => {
        render(<TodoForm onAddTodo={mockOnAddTodo} />);
        const addButton = screen.getByText('Add');
        fireEvent.click(addButton);
        expect(mockOnAddTodo).not.toHaveBeenCalled();
    });
});