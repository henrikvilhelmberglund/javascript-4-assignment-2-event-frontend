import { IDetailsData } from '../../../lib/interfaces/IDetails';

export default function AreaDetails({ name, image_url: imageUrl }: IDetailsData) {
	return (
		<article
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="outline-solid flex h-[80vh] w-full flex-col items-center bg-black/80 bg-cover bg-blend-multiply">
			<h2 className="font-elite relative top-6 w-96 text-center text-5xl text-emerald-500">{name}</h2>
		</article>
	);
}
