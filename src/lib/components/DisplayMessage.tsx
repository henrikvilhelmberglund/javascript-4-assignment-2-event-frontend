type DisplayMessageProps = {
	text: string;
};

export default function DisplayMessage({ text }: DisplayMessageProps) {
	return text !== '' ?
			<div className="animate-delay-0.5s keyframes-fade-out  absolute left-[50%] top-[80%] animate-[fade-out_0.6s_ease-out_1] rounded bg-green-500 p-4">
				<p className="text-2xl text-black">{text}</p>
			</div>
		:	null;
}
