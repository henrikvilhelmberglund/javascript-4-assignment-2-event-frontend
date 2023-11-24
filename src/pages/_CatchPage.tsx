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
				<h1 className="my-h1">An error has occured: {error.name}</h1>
				<h2 className="my-h2">Please try again or contact support. ({error.message})</h2>
			</main>
			<footer className="relative w-full bg-black pr-2 text-right text-emerald-500">© CthulhuCon 2023</footer>
			{/* putting active in UnoCSS safelist breaks stuff for some reason */}
			<aside className="active hidden"></aside>
		</div>
	);
}
