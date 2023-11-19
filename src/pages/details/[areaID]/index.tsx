import { useParams } from 'react-router-dom';

interface IAreaParams {
	areaID: string;
}

export function Loader({ params }: { params: IAreaParams }) {
	const { areaID } = params;
	return fetch(`http://localhost:3002/api/v1/details/${areaID}`);
}

export default function Index() {
	const { areaID } = useParams();
	return <>{areaID}</>;
}
