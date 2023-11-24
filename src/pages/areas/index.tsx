import { useLoaderData } from 'react-router-dom';
import indexImage from '/src/assets/andree-wallin-1118.webp';
import { ILoaderAreasResponse } from '../../lib/interfaces/IAreas';
import Area from './_Area';
import type { LoaderFunction } from 'react-router';

export const Loader: LoaderFunction = () => {
	return fetch('http://localhost:3002/api/v1/areas');
};

export default function Index() {
	const { data } = useLoaderData() as ILoaderAreasResponse;
	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="my-h1">Areas</h1>
			<h2 className="my-h2">CthulhuCon features multiple areas.</h2>
			<div className="mt-10 flex flex-col md:flex-row h-[100vh] md:h-[50vh] justify-between gap-16 ">{data && data.map((area) => <Area key={area.id} {...area}></Area>)}</div>
		</main>
	);
}
