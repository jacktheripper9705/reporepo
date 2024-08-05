import { useState } from 'react';
import GonggangBox from './Gonggang/GonggangBox';

const Gonggang = () => {
	const [visibleStartIndex, setVisibleStartIndex] = useState(0);
	const [isSliding, setIsSliding] = useState(false);
	const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // GonggangBox를 나타내는 임의의 배열

	const handleClick = () => {
		setIsSliding(true);
		setTimeout(() => {
			setVisibleStartIndex((prevIndex) => (prevIndex + 3) % boxes.length);
			setIsSliding(false);
		}, 500);
	};

	return (
		<div className="w-full h-[50%] border px-[25px] bg-white rounded-t-2xl py-[25px] flex flex-col gap-4">
			<div className="flex gap-[8px]">
				<p className="text-[12px]">공강 시간에 할 수 있어요!</p>
				<img src="/img/moreIcon.svg" onClick={handleClick} className="cursor-pointer" />
			</div>
			<div className="w-full h-full flex gap-[4px] overflow-hidden relative">
				<div className={`flex gap-[4px] transition-transform duration-500 ${isSliding ? 'slide-out' : ''}`}>
					{boxes.slice(visibleStartIndex, visibleStartIndex + 5).map((box, index) => (
						<GonggangBox key={index} />
					))}
				</div>
				{isSliding && (
					<div className={`absolute inset-0 flex gap-[4px] transition-transform duration-500 slide-in`}>
						{boxes
							.slice((visibleStartIndex + 3) % boxes.length, (visibleStartIndex + 8) % boxes.length)
							.map((box, index) => (
								<GonggangBox key={index} />
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Gonggang;
