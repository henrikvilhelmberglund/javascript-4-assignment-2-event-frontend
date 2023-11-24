import indexImage from '/src/assets/andree-wallin-1118.webp';

export default function Error() {
	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="my-h1">404</h1>
			<h2 className="my-h2">The page you were looking for was not found.</h2>
		</main>
	);
}
