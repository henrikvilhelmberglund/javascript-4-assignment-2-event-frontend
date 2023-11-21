import { useNavigate } from 'react-router-dom';
import { ITicket } from '../../lib/interfaces/ITickets';

// TODO do this with Action in /my-tickets instead 

async function cancelTicket(id) {
	const response = await fetch(`http://localhost:3002/api/v1/tickets/${id}`, { method: 'DELETE' });
	const result = await response.json();
	window.location.href = '/my-tickets';
}

export default function Ticket({ id, name, email, ticketType, ticketAmount }: ITicket) {
	return (
		<main>
			<article className="outline-solid relative m-4 flex h-[35vh] w-[50vw] flex-col items-center justify-around rounded-sm border-8 border-emerald-600 bg-gradient-to-b from-emerald-500/100 to-emerald-300/100 bg-cover px-10 text-black bg-blend-multiply outline-0 outline-emerald-500 hover:outline-1">
				<h2 className="font-elite mt-4 w-full text-center  text-5xl">
					CthulhuCon {ticketType} x{ticketAmount}
				</h2>
				<div>
					<p className="text-2xl">{name}</p>
					<p>{email}</p>
				</div>
				<button onClick={() => cancelTicket(id)} className="absolute right-0 top-0 text-4xl">
					❌
				</button>
			</article>
		</main>
	);
}
