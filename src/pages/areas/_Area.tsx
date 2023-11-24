import { Link } from 'react-router-dom';
import { IShortAreaData } from '../../lib/interfaces/IAreas';

export default function Area({ id, name, image_url: imageUrl }: IShortAreaData) {
	return (
		<Link
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="outline-solid md:m-4 w-min h-full bg-black/60 bg-cover md:px-10 bg-blend-multiply outline-0  outline-emerald-500 hover:outline-1"
			to={`/details/${id}`}
			unstable_viewTransition>
			<article>
				<h2 className="font-elite relative top-6 w-96 text-center text-2xl md:text-5xl text-emerald-500">{name}</h2>
			</article>
		</Link>
	);
}
