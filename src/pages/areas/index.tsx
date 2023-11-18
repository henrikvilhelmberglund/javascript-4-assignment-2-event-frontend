import indexImage from '../../../src/assets/andree-wallin-1118.webp';

export default function Index() {
	return (
		<main className={`bg-[url(${indexImage})] flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">Areas</h1>
			<h2 className="font-elite mt-6 text-3xl text-emerald-500">CthulhuCon features multiple areas.</h2>
			{/* TODO fetch areas, loop through areas and create an Area component for each one */}
			{/* <img className="absolute left-0 w-full opacity-20" src={indexImage} alt="Cthulhu illustration by Andree Wallin" /> */}
		</main>
	);
}
