const MapSearchBox = ({ placeName, placeCategory, placeAddress }) => {
	return (
		<>
			<div className="flex w-full h-full font-pretendardLight text-[16px] gap-[24px]">
				<img src="/img/locationPin.svg" className="w-[23px]" />
				<div className="flex flex-col justify-center items-start gap-[3px] w-full">
					<div className="flex justify-between w-full gap-[40px]">
						<p>{placeName}</p>
						<p className="text-[11px] text-[#999999]">{placeCategory}</p>
					</div>
					<p className="text-[#999999]">{placeAddress}</p>
				</div>
			</div>
			<hr className="border px-[4%]" />
		</>
	);
};

export default MapSearchBox;
