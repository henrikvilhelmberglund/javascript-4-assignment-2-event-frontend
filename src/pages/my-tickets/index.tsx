import { useOutletContext } from 'react-router-dom';
import { ITicket } from '../../lib/interfaces/ITickets';
import indexImage from '../../../src/assets/andree-wallin-1118.webp';
import Ticket from './Ticket';

// export function Loader() {
// 	return fetch('http://localhost:3002/api/v1/tickets');
// }

export default function Index() {
	// seems like useRouteLoaderData doesn't really work for the app layout for now
	// const data = useRouteLoaderData('/') as ITicketsResponse;
	const data = useOutletContext() as ITicket[];
	return (
		<main className={`bg-[url(${indexImage})] flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">My tickets</h1>
			{/* {...ticket} */}
			<div className="mt-10 flex h-[50vh] justify-between gap-16 ">{data && data.map((ticket) => <Ticket key={ticket.id} {...ticket}></Ticket>)}</div>
		</main>
	);
}
