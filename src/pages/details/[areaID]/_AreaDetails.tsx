import { IDetailsData } from '../../../lib/interfaces/IDetails';
import bookImage from '/src/assets/book.webp';

export default function AreaDetails({ name, image_url: imageUrl, description }: IDetailsData) {
	return (
		<article
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="outline-solid flex md:h-[80vh] w-full flex-col items-center bg-black/70 bg-cover bg-blend-multiply">
			<h2 className="my-h2">{name}</h2>
			{/* TODO display always on mobile */}
			<img src={imageUrl} className="md:hidden" alt="" />
			<section
				style={{ backgroundImage: `url(${bookImage})` }}
				className="md:hover:opacity-99 opacity-99 md:opacity-3 mt-12 bg-black bg-cover transition-all duration-500 md:w-[40vw]">
				<div className="flex flex-col p-4">
					{description && description.split('\n').map((paragraph, i) => <p key={i} className="font-elite px-4 text-black first-letter:text-lg ">{paragraph}</p>)}
				</div>
			</section>
		</article>
	);
}
