import { atom, getDefaultStore, useAtom } from 'jotai';
import indexImage from '/src/assets/andree-wallin-1118.webp';
import { ActionFunctionArgs, Form } from 'react-router-dom';
import DisplayMessage from '../../lib/components/DisplayMessage';
import { FETCH_URL } from '../../lib/constants';
import { messageTextAtom } from '../../lib/sharedAtoms';

const ticketTypeAtom = atom<string>('regular');
const ticketAmountAtom = atom<number>(1);

export const Action = async ({ request }: ActionFunctionArgs) => {
	const defaultStore = getDefaultStore();

	let formData = await request.formData();
	console.log(Object.fromEntries(formData));

	let postFormData = JSON.stringify(Object.fromEntries(formData));

	const response = await fetch(`http://${FETCH_URL}:3002/api/v1/tickets`, { method: 'POST', body: postFormData, headers: { 'content-type': 'application/json' } });
	const result = await response.json();
	if (result.statusCode === 201) {
		const message = { text: 'Successfully bought tickets!', id: new Date().getTime() };
		defaultStore.set(messageTextAtom, [...defaultStore.get(messageTextAtom), message]);

		setTimeout(() => {
			defaultStore.set(messageTextAtom, [...defaultStore.get(messageTextAtom).slice(1)]);
		}, 1400);
	}

	// return can be used with useActionData but not really used here
	return Object.fromEntries(formData);
};

export default function Index() {
	const [ticketType, setTicketType] = useAtom(ticketTypeAtom);
	const [ticketAmount, setTicketAmount] = useAtom(ticketAmountAtom);
	const [messageText] = useAtom(messageTextAtom);

	const totalAmount: number = ticketType === 'regular' ? ticketAmount * 500 : ticketAmount * 1500;

	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="my-h1">Tickets</h1>
			<h2 className="my-h2">Make sure to purchase your tickets in time.</h2>
			<Form
				action="/tickets?index"
				method="POST"
				className="font-elite border-1 mt-20 flex w-[75%] md:w-[25%] flex-col gap-2 rounded border-emerald-500 p-4 text-black md:backdrop-blur-md">
				<label className="text-emerald-500" htmlFor="name">
					Name
				</label>
				<input name="name" type="text" id="name" required />
				<label className="text-emerald-500" htmlFor="email">
					Email
				</label>
				<input name="email" type="email" id="email" required />
				<label className="text-emerald-500" htmlFor="ticketType">
					Ticket type
				</label>
				<select name="ticketType" id="ticketType" onChange={(e) => setTicketType(e.target.value)} className="py-2">
					<option value="regular">Regular ticket (500SEK)</option>
					<option value="photo">Ticket - professional photograph session (1500SEK)</option>
				</select>
				<label className="text-emerald-500" htmlFor="ticketAmount">
					Amount of tickets
				</label>
				<input
					name="ticketAmount"
					id="ticketAmount"
					min="1"
					onChange={(e) => setTicketAmount(parseInt(e.target.value, 10))}
					type="number"
					value={ticketAmount}
					required
				/>
				<p className="text-emerald-500">Total: {totalAmount} SEK</p>
				<button className="rounded bg-emerald-500 p-4">Purchase</button>
			</Form>
			<div className="relative">{messageText && messageText.map((message) => <DisplayMessage key={message.id} text={message.text} />)}</div>
		</main>
	);
}
