import indexImage from '../../src/assets/andree-wallin-1118.webp';

export default function Error() {
	return (
		<main className={`bg-[url(${indexImage})] flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
      <h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">404</h1>
      <h2 className="font-elite mt-6 text-3xl text-emerald-500">The page you were looking for was not found.</h2>
		</main>
	);
}
