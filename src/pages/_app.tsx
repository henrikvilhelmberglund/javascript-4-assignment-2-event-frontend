import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { ITicketsResponse } from '../lib/interfaces/ITickets';

export async function Loader() {
	return fetch('http://localhost:3002/api/v1/tickets');
}

export default function Layout() {
	const { data } = useLoaderData() as ITicketsResponse;
	return (
		<>
			<div className="min-h-screen">
				<header>
					<nav className="border-1 flex items-center justify-center gap-12 border-black bg-black bg-gradient-to-b from-black to-[#0a1518] pt-4">
						<Link className="nav-button" to="/">
							Home
						</Link>
						<Link className="nav-button" to="/areas">
							Areas
						</Link>
						<Link className="nav-button" to="/tickets">
							Tickets
						</Link>
						{data && data.length !== 0 ? (
							<Link className="nav-button" to="/my-tickets">
								My Tickets
							</Link>
						) : null}
					</nav>
				</header>
				<Outlet context={data} />
				<footer className="fixed bottom-2 right-2">Footer</footer>
			</div>
		</>
	);
}
