import { useLoaderData } from 'react-router-dom';
import AreaDetails from './_AreaDetails';
import { ILoaderDetailsResponse } from '../../../lib/interfaces/IDetails';

interface IAreaParams {
	areaID: string;
}

export function Loader({ params }: { params: IAreaParams }) {
	const { areaID } = params;
	return fetch(`http://localhost:3002/api/v1/details/${areaID}`);
}

export default function Index() {
	const { data } = useLoaderData() as ILoaderDetailsResponse;
	return (
		<main className="flex h-screen flex-col items-center bg-black">
			<AreaDetails {...data}></AreaDetails>;
		</main>
	);
}
