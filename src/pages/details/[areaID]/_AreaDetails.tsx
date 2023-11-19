import { IDetailsData } from '../../../lib/interfaces/IDetails';
import bookImage from '../../../../src/assets/book.webp';

export default function AreaDetails({ name, image_url: imageUrl, description }: IDetailsData) {
	return (
		<article
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="outline-solid flex h-[80vh] w-full flex-col items-center bg-black/70 bg-cover bg-blend-multiply">
			<h2 className="font-elite relative top-6 w-96 text-center text-5xl text-emerald-500">{name}</h2>
			<section style={{ backgroundImage: `url(${bookImage})` }} className="hover:opacity-100 opacity-0 transition-all duration-500 mt-12 bg-black bg-cover">
				<div className="flex w-[70vw] h-[34vw] flex-col p-4 flex-wrap">{description && description.split('\n').map((paragraph) => <p className="font-elite first-letter:text-xl px-4 w-[35vw] text-black ">{paragraph}</p>)}</div>
			</section>
		</article>
	);
}
