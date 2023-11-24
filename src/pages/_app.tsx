import { type LoaderFunction, NavLink, Outlet, useLoaderData, useRouteError } from 'react-router-dom';
import { ITicketsResponse } from '../lib/interfaces/ITickets';
import CatchPage from './_CatchPage';
import { FETCH_URL } from '../lib/constants';

export const Loader: LoaderFunction = () => {
	return fetch(`http://${FETCH_URL}:3002/api/v1/tickets`);
};

// catches errors
export function Catch() {
	const error = useRouteError() as Error;
	console.error(error);
	return <CatchPage error={error} />;
}

export default function Layout() {
	const { data } = useLoaderData() as ITicketsResponse;
	return (
		<>
			<div className="min-h-screen">
				<header>
					<nav className="border-1 flex items-center justify-center gap-2 border-black bg-black bg-gradient-to-b from-black to-[#0a1518] pt-4 md:gap-12">
						<NavLink className="nav-button" to="/" unstable_viewTransition>
							Home
						</NavLink>
						<NavLink className="nav-button" to="/areas" unstable_viewTransition>
							Areas
						</NavLink>
						<NavLink className="nav-button" to="/tickets" unstable_viewTransition>
							Tickets
						</NavLink>
						{data && data.length !== 0 ?
							<NavLink className="nav-button" to="/my-tickets" unstable_viewTransition>
								My Tickets
							</NavLink>
						:	null}
					</nav>
				</header>
				<Outlet context={data} />
				<footer className="relative w-full bg-black pr-2 text-right text-emerald-500">© CthulhuCon 2023</footer>
				{/* putting active in UnoCSS safelist breaks stuff for some reason */}
				<aside className="active hidden"></aside>
			</div>
		</>
	);
}
