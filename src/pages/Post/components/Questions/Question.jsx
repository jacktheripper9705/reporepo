const Question = ({ question }) => {
	return (
		<div className="flex gap-2 items-center">
			<img src="/img/arrowR.svg" alt="오른쪽 화살표 아이콘" />
			<p className="text-[#999999] text-[13px]">{question}</p>
		</div>
	);
};

export default Question;
