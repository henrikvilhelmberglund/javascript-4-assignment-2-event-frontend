import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Index from '.';

describe('Form Rendering', () => {
	beforeEach(() => {
		const router = createMemoryRouter([{ path: '/', element: <Index /> }], { initialEntries: ['/'] });
		render(<RouterProvider router={router} />);
	});

	it('renders name input', () => {
		expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
	});

	it('renders email input', () => {
		expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
	});

	it('renders ticket type select', () => {
		expect(screen.getByLabelText(/Ticket Type/i)).toBeInTheDocument();
	});

	it('renders amount input', () => {
		expect(screen.getByLabelText(/Amount of tickets/i)).toBeInTheDocument();
	});

	it('renders total amount text', () => {
		expect(screen.getByText(/Total:/i)).toBeInTheDocument();
	});

	it('renders purchase button', () => {
		expect(screen.getByRole('button', { name: /Purchase/i })).toBeInTheDocument();
	});
});

describe('User Input Handling', () => {
	beforeEach(() => {
		const router = createMemoryRouter([{ path: '/', element: <Index /> }], { initialEntries: ['/'] });
		render(<RouterProvider router={router} />);
	});

	it('handles user input changes', () => {
		// Simulate user input
		fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
		fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
		fireEvent.change(screen.getByLabelText(/Ticket Type/i), { target: { value: 'photo' } });
		fireEvent.change(screen.getByLabelText(/Amount of tickets/i), { target: { value: '3' } });

		// Verify that the state is updated accordingly
		expect(screen.getByLabelText(/Ticket Type/i)).toHaveValue('photo');
		expect(screen.getByLabelText(/Amount of tickets/i)).toHaveValue(3);

		// Verify that the total amount is updated
		expect(screen.getByText(/Total: 4500 SEK/i)).toBeInTheDocument();
	});
});
