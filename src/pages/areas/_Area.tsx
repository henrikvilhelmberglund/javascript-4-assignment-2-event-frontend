import { IShortAreaData } from '../../lib/interfaces/areas';

export default function Area({ id, name, image_url: imageUrl }: IShortAreaData) {
  return (
    <a style={{ backgroundImage: `url(${imageUrl})` }} className="m-4 px-10 hover:outline-1 outline-solid outline-0 outline-emerald-500 w-min bg-cover  bg-black/60 bg-blend-multiply" href={`/details/${id}`}>
		<article>
      <h2 className="font-elite text-center text-emerald-500 relative top-6  w-96 text-5xl">{name}</h2>
		</article>
    </a>
	);
}
