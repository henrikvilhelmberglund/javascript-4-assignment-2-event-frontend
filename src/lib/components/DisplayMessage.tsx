type DisplayMessageProps = {
	text: string;
};

export default function DisplayMessage({ text }: DisplayMessageProps) {
	return (
		<>
			{text !== '' ?
				<div className="outline-solid keyframes-slide-out-down-custom absolute -left-40 top-0 w-max animate-[slide-out-down-custom_1.5s_ease-out_1] rounded bg-green-500 p-4 outline-1 outline-black">
					<p className="text-2xl text-black">{text}</p>
				</div>
			:	null}
		</>
	);
}
