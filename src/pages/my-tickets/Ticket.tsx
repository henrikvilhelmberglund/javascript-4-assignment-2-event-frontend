import { Form } from 'react-router-dom';
import { ITicket } from '../../lib/interfaces/ITickets';

export default function Ticket({ id, name, email, ticketType, ticketAmount }: ITicket) {
	return (
		<article className="outline-solid relative m-4 flex min-h-[35vh] w-[50vw] flex-col items-center justify-around rounded-sm border-8 border-emerald-600 bg-gradient-to-b from-emerald-500/100 to-emerald-300/100 bg-cover px-10 text-black bg-blend-multiply outline-0 outline-emerald-500 hover:outline-1">
			<h2 className="font-elite mt-4 w-full text-center  text-5xl">
				CthulhuCon {ticketType} x{ticketAmount}
			</h2>
			<div>
				<p className="text-2xl">{name}</p>
				<p>{email}</p>
			</div>
			<Form action="/my-tickets?index" method="DELETE">
				<input type="text" className="hidden" defaultValue={id.toString()} name="id" />
				<button className="absolute right-0 top-0 text-4xl">❌</button>
			</Form>
		</article>
	);
}
