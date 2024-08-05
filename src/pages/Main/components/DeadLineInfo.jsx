const DeadLineInfo = () => {
	const durationSet = [
		{ duration: 'Min15', name: '15분 이내' },
		{ duration: 'Min30', name: '30분 이내' },
		{ duration: 'Hour1', name: '1시간 이내' },
		{ duration: 'Hour2', name: '2시간 이내' },
		{ duration: 'Over', name: '2시간 이상' },
	];
	let duration = 'Over';
	const matchingDuration = durationSet.find((item) => item.duration === duration);

	let title = 'XR 실험자 경험 인터뷰';
	let location_name = '상상관';
	let reward = '기프티콘';

	return (
		<div className="w-full h-[356px] border px-[25px] bg-white rounded-2xl py-[11px] flex flex-col">
			<div className="flex gap-3">
				<p className="text-[12px]">마감 기한이 임박했어요!</p>
			</div>
			<div className="w-[168px] flex-col-template mt-2">
				<img src="/img/daedline.svg" />
			</div>
			<div className="flex-col-template text-center">
				<p className="text-[8px] text-Blue-500">소요시간</p>
				<p className="text-[11px] text-Blue-500">{matchingDuration.name}</p>

				<p className="mt-[10px] text-[15px] font-pretendardSemibold">{title}</p>
				<p className="mt-[16px] text-[15px] font-pretendardSemibold">{location_name}</p>
			</div>
			<div className="flex-template gap-3">
				<img src="/img/presentIcon.svg" />
				<p className="text-[11px]">{reward}</p>
			</div>
		</div>
	);
};

export default DeadLineInfo;
