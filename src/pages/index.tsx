import indexImage from '/src/assets/andree-wallin-1118.webp';

export default function Index() {
	return (
		<main style={{ backgroundImage: `url(${indexImage})` }} className={`flex min-h-screen flex-col items-center bg-black/70 bg-cover bg-blend-multiply`}>
			<h1 className="my-h1">CthulhuCon</h1>
			<h2 className="my-h2">
				CthulhuCon is returning to
				<span className="text-emerald-300"> Stockholm </span>
				on
				<span className="text-emerald-300"> 2023-11-25. </span>
				Don't miss it!
			</h2>
			<div className="font-elite border-1 mt-20 w-[75%] md:w-[45%] rounded border-emerald-500 p-4 text-emerald-500 md:backdrop-blur-md">
				<p className="mb-2 text-2xl font-extrabold">Schedule</p>
				<p>09:00 CthulhuCon opens</p>
				<p>10:00 Signing event at book area</p>
				<p>11:00 Professional photo event starts at photo area (note: special ticket needed)</p>
				<p>12:00 Lunch restaurant opens</p>
				<p>13:00-15:00 Live roleplay at stage area hosted by Karl-Fredrik as Keeper and featuring celebrity guests</p>
				<p>16:00 Cosplay event at stage area</p>
				<p>17:00 Cosplay event prize ceremony</p>
				<p>18:00 Special event!</p>
			</div>
		</main>
	);
}
