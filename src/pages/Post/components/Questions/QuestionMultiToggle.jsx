import { useContext, useState } from 'react';
import { PostContext } from '../../../../context/PostContext';

const QuestionMultiToggle = () => {
	const interviews = [
		{
			name: '15분 이내',
			duration: 'Min15',
		},
		{
			name: '30분 이내',
			duration: 'Min30',
		},
		{
			name: '1시간 이내',
			duration: 'Hour1',
		},
		{
			name: '2시간 이내',
			duration: 'Hour2',
		},
		{
			name: '그 이상',
			duration: 'Over',
		},
	];

	const [isToggle, setIsToggle] = useState(false);
	const [selectName, setSelectName] = useState('인터뷰 예상 시간');

	const { postData, setPostData } = useContext(PostContext);

	const handleToggleClick = () => {
		setIsToggle(!isToggle);
	};

	const handleSelectClick = (name, duration) => {
		setIsToggle(!isToggle);
		setSelectName(name);
		setPostData((prev) => ({ ...prev, duration: duration }));
	};

	return (
		<div className="gap-[6px] relative">
			<div
				className="w-full text-Blue-500 border border-[#999999] rounded-md text-[12px] py-[9px] flex px-[8px] justify-between cursor-pointer"
				onClick={handleToggleClick}
			>
				<div className="flex gap-[8px]">
					<img src="/img/clockIcon.svg" />
					<span>{selectName}</span>
				</div>
				{isToggle ? <img src="/img/arrowUp.svg" /> : <img src="/img/arrowDown.svg" />}
			</div>
			{isToggle && (
				<div className="absolute top-11 bg-white w-full text-Blue-500 border border-[#999999] rounded-md text-[12px] py-[9px] flex px-[8px] justify-between gap-2">
					<ul className="w-full">
						{interviews.map((interview, idx) => (
							<li
								key={idx}
								className="flex gap-[8px] py-[9px] hover:bg-Blue-100 w-full rounded-md cursor-pointer"
								onClick={() => {
									handleSelectClick(interview.name, interview.duration);
								}}
							>
								<i>
									<img src="/img/clockIcon.svg" />
								</i>
								{interview.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default QuestionMultiToggle;
