import { atom, getDefaultStore, useAtom } from 'jotai';
import indexImage from '/src/assets/andree-wallin-1118.webp';
import { ActionFunctionArgs, Form } from 'react-router-dom';
import DisplayMessage from '../../lib/components/DisplayMessage';

interface IMessageTextObject {
	text: string;
	id: number;
}

const ticketTypeAtom = atom<string>('regular');
const ticketAmountAtom = atom<number>(1);
const messageTextAtom = atom<IMessageTextObject[]>([]);

export async function Action({ request }: ActionFunctionArgs) {
	const defaultStore = getDefaultStore();

	let formData = await request.formData();
	console.log(Object.fromEntries(formData));

	let postFormData = JSON.stringify(Object.fromEntries(formData));

	const response = await fetch('http://localhost:3002/api/v1/tickets', { method: 'POST', body: postFormData, headers: { 'content-type': 'application/json' } });
	const result = await response.json();
	if (result.statusCode === 201) {
		const message = { text: 'Successfully bought tickets!', id: new Date().getTime() };
		defaultStore.set(messageTextAtom, [...defaultStore.get(messageTextAtom), message]);

		setTimeout(() => {
			defaultStore.set(messageTextAtom, [...defaultStore.get(messageTextAtom).slice(1)]);
		}, 2000);
	}

	// return can be used with useActionData but not really used here
	return Object.fromEntries(formData);
}

export default function Index() {
	const [ticketType, setTicketType] = useAtom(ticketTypeAtom);
	const [ticketAmount, setTicketAmount] = useAtom(ticketAmountAtom);
	const [messageText] = useAtom(messageTextAtom);

	const totalAmount: number = ticketType === 'regular' ? ticketAmount * 500 : ticketAmount * 1500;

	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
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
				<input name="ticketAmount" min="1" onChange={(e) => setTicketAmount(parseInt(e.target.value, 10))} type="number" value={ticketAmount} required />
				<p className="text-emerald-500">Total: {totalAmount} SEK</p>
				<button className="rounded bg-emerald-500 p-4">Purchase</button>
			</Form>
			<div className="relative">{messageText && messageText.map((message) => <DisplayMessage key={message.id} text={message.text} />)}</div>
		</main>
	);
}
