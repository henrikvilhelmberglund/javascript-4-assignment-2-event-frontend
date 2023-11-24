import { LoaderFunction, useLoaderData } from 'react-router-dom';
import AreaDetails from './_AreaDetails';
import { ILoaderDetailsResponse } from '../../../lib/interfaces/IDetails';
import { FETCH_URL } from '../../../lib/constants';
import { Helmet } from 'react-helmet-async';

export const Loader: LoaderFunction = ({ params }) => {
	// export function Loader({ params }: { params: IAreaParams }) {
	const { areaID } = params;
	return fetch(`http://${FETCH_URL}:3002/api/v1/details/${areaID}`);
};

export default function Index() {
	const { data } = useLoaderData() as ILoaderDetailsResponse;
	return (
		<main className="flex flex-col items-center bg-black md:h-screen">
			<Helmet>
				<title>CthulhuCon - {data.name}</title>
			</Helmet>
			<AreaDetails {...data}></AreaDetails>;
		</main>
	);
}
