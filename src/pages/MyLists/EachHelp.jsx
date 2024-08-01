import { useEffect, useState } from 'react';

const EachHelp = ({ initialState }) => {
	const [bgColor, setBgColor] = useState('');
	const [check, setCheck] = useState('suggestion');
	const [status, setStatus] = useState(initialState);
	const [checked, setChecked] = useState(false);

	const handleDelete = () => {
		// img 버튼 클릭시 삭제 기능
	};

	const handleCheck = () => {
		if (status === 'accept') {
			setStatus('confirm');
		} else if (status === 'confirm') {
			setStatus('accept');
		} else if (status === 'suggestion') {
			setChecked(false);
		}
	};

	useEffect(() => {
		switch (
			status // status : suggestion, accept, confirm - 제안, 수락, 일정확정
		) {
			case 'suggestion':
				setBgColor('bg-gray-100 border-gray-100');
				break;
			case 'accept':
				setBgColor('bg-gray-200 border-gray-200');
				setChecked(false);
				break;
			case 'confirm':
				setBgColor('bg-gray-300 border-gray-300');
				setChecked(true);
				break;
			default:
				bgColor = 'bg-gray-300 border-gray-300';
		}
	}, [status]);

	return (
		<button className={`border-opacity-50 rounded-3xl p-3 flex items-center my-10 shadow w-full ${bgColor}`}>
			<img className="" src={checked ? '/img/checkbox.svg' : '/img/uncheckbox.svg'} onClick={handleCheck} />
			<div className="pl-5">
				<p className="text-black font-pretendardMedium text-md">조건희님과 실험 후 리뷰하기!</p>
				<p className="text-start">learn more →</p>
			</div>
			<div className="ml-auto pr-2">
				<img
					className="fill- ml-auto w-5 h- pb-1"
					src="/img/iconXCircle.svg"
					alt="delete image"
					onClick={handleDelete}
				/>
				<p className="text-gray-400 font-pretendardLight">7:41 PM</p>
			</div>
		</button>
	);
};

export default EachHelp;
