import { ActionFunctionArgs, useOutletContext } from 'react-router-dom';
import { ITicket } from '../../lib/interfaces/ITickets';
import indexImage from '/src/assets/andree-wallin-1118.webp';
import Ticket from './Ticket';
import { FETCH_URL } from '../../lib/constants';

export const Action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const id = formData.get('id');
	return fetch(`http://${FETCH_URL}:3002/api/v1/tickets/${id}`, { method: 'DELETE' });
};

export default function Index() {
	// seems like useRouteLoaderData doesn't really work for the app layout for now
	// const data = useRouteLoaderData('/') as ITicketsResponse;
	const data = useOutletContext() as ITicket[];
	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="my-h1">My tickets</h1>
			<div className="mt-10 flex  flex-col justify-between gap-16">
				{data.length ?
					<>{data && data.map((ticket) => <Ticket key={ticket.id} {...ticket}></Ticket>)}</>
				:	<h2 className="font-elite text-3xl text-emerald-500">No tickets were found.</h2>}
			</div>
		</main>
	);
}
