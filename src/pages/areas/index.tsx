import { useLoaderData } from 'react-router-dom';
import indexImage from '/src/assets/andree-wallin-1118.webp';
import { ILoaderAreasResponse } from '../../lib/interfaces/IAreas';
import Area from './_Area';

export function Loader() {
	return fetch('http://localhost:3002/api/v1/areas');
}

export default function Index() {
	const { data } = useLoaderData() as ILoaderAreasResponse;
	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">Areas</h1>
			<h2 className="font-elite mt-6 text-3xl text-emerald-500">CthulhuCon features multiple areas.</h2>
			<div className="mt-10 flex h-[50vh] justify-between gap-16 ">{data && data.map((area) => <Area key={area.id} {...area}></Area>)}</div>
		</main>
	);
}
