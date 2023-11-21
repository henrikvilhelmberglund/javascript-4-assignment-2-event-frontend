import { atom, useAtom } from 'jotai';
import indexImage from '../../../src/assets/andree-wallin-1118.webp';
import { ActionFunctionArgs, Form } from 'react-router-dom';

const ticketTypeAtom = atom('regular');
const ticketAmountAtom = atom(1);

export async function Action({ request }: ActionFunctionArgs) {
	let formData = await request.formData();
	console.log(Object.fromEntries(formData));
	return Object.fromEntries(formData);
}

export default function Index() {
	const [ticketType, setTicketType] = useAtom(ticketTypeAtom);
	const [ticketAmount, setTicketAmount] = useAtom(ticketAmountAtom);

	const totalAmount = ticketType === 'regular' ? ticketAmount * 500 : ticketAmount * 1500;

	return (
		<main className={`bg-[url(${indexImage})] flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">Tickets</h1>
			<h2 className="font-elite mt-6 text-3xl text-emerald-500">Make sure to purchase your tickets in time.</h2>
			<Form
				action="/tickets?index"
				method="POST"
				className="font-elite border-1 mt-20 flex w-[25%] flex-col gap-2 rounded border-emerald-500 p-4 text-black backdrop-blur-md">
				<label className="text-emerald-500" htmlFor="name">
					Name
				</label>
				<input name="name" type="text" required />
				<label className="text-emerald-500" htmlFor="email">
					Email
				</label>
				<input name="email" type="email" required />
				<select name="ticketType" onChange={(e) => setTicketType(e.target.value)} className="py-2" id="type">
					<option value="regular">Regular ticket (500SEK)</option>
					<option value="photo">Ticket - professional photograph session (1500SEK)</option>
				</select>
				<label className="text-emerald-500" htmlFor="amount">
					Amount of tickets
				</label>
				<input name="ticketAmount" onChange={(e) => setTicketAmount(parseInt(e.target.value, 10))} type="number" value={ticketAmount} required />
				<p className="text-emerald-500">Total: {totalAmount} SEK</p>
				<button className="rounded bg-emerald-500 p-4">Purchase</button>
			</Form>
		</main>
	);
}