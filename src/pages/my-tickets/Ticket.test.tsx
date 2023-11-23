import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, RouterProvider, Routes, createMemoryRouter } from 'react-router-dom';
import Ticket from './Ticket';
import Index from '.';

const mockTicket = {
	id: 1,
	name: 'John Doe',
	email: 'john@example.com',
	ticketType: 'regular',
	ticketAmount: 2,
};

test('renders ticket information', () => {
	const router = createMemoryRouter([{ path: '/', element: <Ticket {...mockTicket} /> }], { initialEntries: ['/'] });

	render(<RouterProvider router={router} />);

	// Verify that the rendered information is correct
	expect(screen.getByText(`CthulhuCon ${mockTicket.ticketType} x${mockTicket.ticketAmount}`)).toBeInTheDocument();
	expect(screen.getByText(mockTicket.name)).toBeInTheDocument();
	expect(screen.getByText(mockTicket.email)).toBeInTheDocument();
});
