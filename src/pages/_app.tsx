import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<>
			<div className="min-h-screen w-screen bg-gradient-to-b from-white to-sky-200 pb-52 dark:bg-sky-900">
				<header>
					<nav className="flex flex items-center justify-center gap-12 bg-slate-100 py-2">
						<Link className="nav-button" to="/">
							Home
						</Link>
						<Link className="nav-button" to="/jotai-test">
							Jotai example
						</Link>
					</nav>
				</header>
				<main className="flex min-h-screen flex-col items-center md:mb-40 md:mt-20">
					<Outlet />
				</main>
				<footer className="fixed bottom-2 right-2">Footer</footer>
			</div>
		</>
	);
}
