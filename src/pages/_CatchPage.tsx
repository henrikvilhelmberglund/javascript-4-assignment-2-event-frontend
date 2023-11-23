import { NavLink } from 'react-router-dom';
import indexImage from '/src/assets/andree-wallin-1118.webp';

export default function CatchPage({ error }: { error: Error }) {
	return (
		<div className="min-h-screen">
			<header>
				<nav className="border-1 flex items-center justify-center gap-12 border-black bg-black bg-gradient-to-b from-black to-[#0a1518] pt-4">
					<NavLink className="nav-button" to="/" unstable_viewTransition>
						Home
					</NavLink>
					<NavLink className="nav-button" to="/areas" unstable_viewTransition>
						Areas
					</NavLink>
					<NavLink className="nav-button" to="/tickets" unstable_viewTransition>
						Tickets
					</NavLink>
				</nav>
			</header>
			<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
				<h1 className="font-heading drop-shadow-color-black pt-8 text-7xl text-emerald-500 drop-shadow-lg">An error has occured: {error.name}</h1>
				<h2 className="font-elite mt-6 text-3xl text-emerald-500">Please try again or contact support. ({error.message})</h2>
			</main>
			<footer className="fixed bottom-2 right-2">Footer</footer>
			{/* putting active in UnoCSS safelist breaks stuff for some reason */}
			<aside className="active hidden"></aside>
		</div>
	);
}
