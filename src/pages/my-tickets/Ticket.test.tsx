import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Ticket from './Ticket';

const mockTicket = {
	id: 1,
	name: 'John Doe',
	email: 'john@example.com',
	ticketType: 'regular',
	ticketAmount: 2,
};

describe('renders ticket information', () => {
	beforeEach(() => {
		const router = createMemoryRouter([{ path: '/', element: <Ticket {...mockTicket} /> }], { initialEntries: ['/'] });
		render(<RouterProvider router={router} />);
	});

	it('renders ticket type and ticket amount', () => {
		expect(screen.getByText(`CthulhuCon ${mockTicket.ticketType} x${mockTicket.ticketAmount}`)).toBeInTheDocument();
  });
  
	it('renders ticket holder name', () => {
		expect(screen.getByText(mockTicket.name)).toBeInTheDocument();
  });
  
	it('renders ticket holder email', () => {
		expect(screen.getByText(mockTicket.email)).toBeInTheDocument();
	});
});
