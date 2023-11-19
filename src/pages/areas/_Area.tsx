import { IShortAreaData } from '../../lib/interfaces/IAreas';

export default function Area({ id, name, image_url: imageUrl }: IShortAreaData) {
	return (
		<a
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="outline-solid m-4 w-min bg-black/60 bg-cover px-10 bg-blend-multiply outline-0  outline-emerald-500 hover:outline-1"
			href={`/details/${id}`}>
			<article>
				<h2 className="font-elite relative top-6 w-96 text-center  text-5xl text-emerald-500">{name}</h2>
			</article>
		</a>
	);
}
