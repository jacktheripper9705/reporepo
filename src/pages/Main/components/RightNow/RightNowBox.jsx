const RightNowBox = () => {
	let reward = '기프티콘';
	let title = '애플리케이션 기반의 공동 투자 사용 경험에 대한 설문';

	return (
		<div className="border border-Blue-400 bg-Blue-100 bg-opacity-50 rounded-3xl flex-none w-[calc((100%-58px)/3)]">
			<div className="flex-col-template px-[18px]">
				<img src="/img/present.svg" />
				<p className="mt-[7px] text-Blue-500 text-center">{reward}</p>
				<p className="mt-[21px] text-[11px] text-center">{title}</p>
			</div>
		</div>
	);
};

export default RightNowBox;
