import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<>
			<div className="min-h-screen">
				<header>
					<nav className="border-1 flex items-center justify-center gap-12 border-black bg-black bg-gradient-to-b from-black to-[#0a1518] pt-4">
						<Link className="nav-button" to="/">
							Home
						</Link>
						<Link className="nav-button" to="/areas">
							Areas
						</Link>
						<Link className="nav-button" to="/tickets">
							Tickets
						</Link>
					</nav>
				</header>
				<Outlet />
				<footer className="fixed bottom-2 right-2">Footer</footer>
			</div>
		</>
	);
}
