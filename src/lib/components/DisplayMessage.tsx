import { useEffect, useState } from 'react';

type DisplayMessageProps = {
	text: string;
	duration: number;
};

export default function DisplayMessage({ text, duration }: DisplayMessageProps) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [duration]);

	return (
		<>
			{isVisible && text !== '' ?
				<div className="animate-delay-0.5s keyframes-fade-out absolute left-[50%] top-[80%] animate-[fade-out_0.6s_ease-out_1] rounded bg-green-500 p-4">
					<p className="text-2xl text-black">{text}</p>
				</div>
			:	null}
		</>
	);
}
