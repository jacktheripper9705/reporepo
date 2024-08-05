import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

const EachHelp = ({ initialState }) => {
	const [bgColor, setBgColor] = useState('');
	const [check, setCheck] = useState('suggestion');
	const [status, setStatus] = useState(initialState);
	const [checked, setChecked] = useState(false);
	const [isTrustOpen, setIsTrustOpen] = useState(false);
	const [isReviewOpen, setIsReviewOpen] = useState(false);
	const [selectedTrustOptions, setSelectedTrustOptions] = useState({
		// 신뢰도 평가 항목
		option1: false,
		option2: false,
		option3: false,
	});
	const initialTrustOptions = {
		// Modal이 닫힐때 ReviewCheck 값 초기화
		option1: false,
		option2: false,
		option3: false,
	};

	const handleTrustOptionCheck = (option) => {
		setSelectedTrustOptions((prevState) => ({
			...prevState,
			[option]: !prevState[option],
		}));
	};

	const resetTrustOptions = () => {
		setSelectedTrustOptions(initialTrustOptions); // ReviewCheck 초기화 함수
		console.log(selectedTrustOptions);
	};

	const closeModal = () => {
		resetTrustOptions();
		openModal();
	};

	const handleModalCloseRequest = () => {
		closeModal();
		console.log('openModal');
	};

	const openModal = () => {
		if (status === 'accept') {
			setIsTrustOpen(!isTrustOpen);
		} else if (status === 'confirm') {
			setIsReviewOpen(!isReviewOpen);
		}
	};

	const handleDelete = () => {
		// img 버튼 클릭시 삭제 기능
	};

	const handleContentClick = (e) => {
		e.stopPropagation();
		// Modal내부 Content 아무곳이나 눌러도 꺼짐현상을 방지
	};

	const handleCheck = (event) => {
		event.stopPropagation();
		if (status === 'accept') {
			setStatus('confirm');
		} else if (status === 'confirm') {
			setStatus('accept');
		} else if (status === 'suggestion') {
			setChecked(false);
		}
	};

	const handleReviewCheck = () => {};

	useEffect(() => {
		switch (
			status // status : suggestion, accept, confirm - 제안, 수락, 일정확정
		) {
			case 'suggestion':
				setBgColor('bg-gray-100 border-gray-100');
				break;
			case 'accept':
				setBgColor('bg-[#E0F8FF] border-[#E0F8FF]');
				setChecked(false);
				break;
			case 'confirm':
				setBgColor('bg-custom-blue border-custom-blue');
				setChecked(true);
				break;
			default:
				bgColor = 'bg-gray-300 border-gray-300';
		}
	}, [status]);

	return (
		<div>
			<button
				className={`border-opacity-50 rounded-3xl p-3 flex items-center my-10 shadow w-full ${bgColor}`}
				onClick={openModal}
			>
				<ReactModal
					isOpen={isTrustOpen}
					contentLabel="Test TrustModal"
					className="bg-white rounded-2xl shadow-lg text-center justify-center"
					overlayClassName="bg-black justify-center items-center flex fixed inset-0 bg-opacity-50"
				>
					<div onClick={handleContentClick} className="relative">
						<button onClick={openModal} className="absolute text-3xl font-light right-4 top-2">
							&times;
						</button>
						<span className="block pt-5">{'디카프리오'}님의 신뢰도는</span>
						<div className="bg-gray-300 rounded-full flex px-3 py-3 items-center mt-3 mx-20">
							<img src="/img/trustCounter.svg" alt="trustCounter image" />
							<img src="/img/trustCounter.svg" alt="trustCounter image" />
							<img src="/img/trustUnCounter.svg" alt="trustCounter image" />
						</div>
						<span className="block font-pretendardMedium text-[#2563FF] mt-1">1 STRIKE</span>
						<button className="bg-blue-600 text-white px-5 py-3 mt-2 rounded-full mb-10">완료</button>
						<span className="absolute bottom-4 right-5 text-xs font-pretendardSemibold">
							{'디가프리오'}님의 모집글 확인하러 가기 →
						</span>
					</div>
				</ReactModal>
				<ReactModal
					isOpen={isReviewOpen}
					contentLabel="Test ReviewModal"
					className="bg-white rounded-2xl shadow-lg text-center justify-center"
					overlayClassName="bg-black justify-center items-center flex fixed inset-0 bg-opacity-50"
					onRequestClose={() => {
						handleModalCloseRequest();
					}}
					shouldCloseOnOverlayClick={true}
				>
					<div onClick={handleContentClick} className="relative">
						<button
							onClick={() => {
								openModal();
								resetTrustOptions();
							}}
							className="absolute text-3xl font-light right-4 top-2"
						>
							&times;
						</button>
						<div className="ml-5 pt-5">
							{/* Review explanation block */}
							<span className="flex justify-start">{'김건우'}님 리뷰하기</span>
							<span className="flex justify-start py-3 mr-14 font-pretendardSemibold text-[#2563FF]">
								질문을 읽고 해당되는 사항에만 체크해주세요.
							</span>
						</div>
						<div className="block">
							{/* Checkbox block */}
							<div className="flex border-t-2 py-6 px-5">
								<span>실험/인터뷰에 결석했나요?</span>
								<img
									className="ml-auto"
									onClick={() => {
										handleTrustOptionCheck('option1');
									}}
									src={selectedTrustOptions.option1 ? '/img/checkbox.svg' : '/img/uncheckbox.svg'}
								></img>
							</div>
							<div className="flex border-t-2 py-6 px-5">
								<span>실험/인터뷰에 지각했나요?</span>
								<img
									className="ml-auto"
									onClick={() => {
										handleTrustOptionCheck('option2');
									}}
									src={selectedTrustOptions.option2 ? '/img/checkbox.svg' : '/img/uncheckbox.svg'}
								></img>
							</div>
							<div className="flex border-y-2 py-6 px-5">
								<span>결석 X, 지각 X</span>
								<img
									className="ml-auto"
									onClick={() => {
										handleTrustOptionCheck('option3');
									}}
									src={selectedTrustOptions.option3 ? '/img/checkbox.svg' : '/img/uncheckbox.svg'}
								></img>
							</div>
							<button className="rounded-full bg-[#2563FF] px-5 py-3 font-pretendardMedium text-white flex ml-auto mr-3 my-5">
								제출하기
							</button>
						</div>
					</div>
				</ReactModal>
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
		</div>
	);
};

export default EachHelp;
