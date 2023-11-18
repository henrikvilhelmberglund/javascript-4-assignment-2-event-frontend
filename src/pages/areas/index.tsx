import { useLoaderData } from 'react-router-dom';
import indexImage from '../../../src/assets/andree-wallin-1118.webp';

export default function Index() {
	const { data } = useLoaderData();
	return (
		<main className={`bg-[url(${indexImage})] flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">Areas</h1>
			<h2 className="font-elite mt-6 text-3xl text-emerald-500">CthulhuCon features multiple areas.</h2>
			{/* TODO fetch areas, loop through areas and create an Area component for each one */}
			{data && data.map((area) => (
				<p key={area.id}>{area.name}</p>
			))}
		</main>
	);
}

export function Loader() {
	return fetch('http://localhost:3002/api/v1/areas');
}
