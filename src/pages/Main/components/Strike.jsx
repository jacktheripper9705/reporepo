const Strike = () => {
	let name = '진호';
	let trust = 1.5;
	return (
		<div className="w-full h-[169px] border bg-white rounded-2xl flex flex-col justify-center items-center gap-[10px]">
			<p className="flex mr-1 mt-[11px] text-[15px]">
				<p className="text-Blue-500">{name}</p> 님의 신뢰도는
			</p>
			<img src={`/img/trust${trust}.svg`} />
		</div>
	);
};

export default Strike;
