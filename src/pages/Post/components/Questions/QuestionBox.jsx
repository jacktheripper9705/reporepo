import Question from './Question';
import QuestionInputBox from './QuestionInputBox';
import QuestionMultiToggle from './QuestionMultiToggle';
import QuestionRadio from './QuestionRadio';

const QuestionBox = ({ page }) => {
	let questions1 = [
		{
			question: '공고 제목을 입력해주세요',
			img: '/img/postsub1.svg',
			type: 'text',
			info: 'title',
		},
		{
			question: '모집 기간을 입력해주세요',
			img: '/img/postsub2.svg',
			type: 'date',
			info: 'calendar',
		},
		{
			question: '모집 인원을 입력해주세요',
			img: '/img/postsub3.svg',
			type: 'number',
			info: 'people', // api 명세서 보고 이름 바꾸기
		},
	];

	let questions2 = [
		{
			question: '인터뷰 예상 소요시간은 얼마나 걸리나요?',
			img: '/img/postsub4.svg',
			type: 'multiToggle',
			info: 'duration',
		},
		{
			question: '인터뷰/ 실험 보상을 제안해주세요',
			img: '/img/postsub5.svg',
			type: 'text',
			info: 'reward',
		},
		{
			question: '인터뷰/실험 장소를 진행하는 대학교를 선택해주세요',
			img: '/img/postsub6.svg',
			type: 'text',
			info: 'university', // 이건 모달로 해야해서 일단 보류
		},
	];

	return (
		<div className="w-full h-full flex flex-col justify-between px-[10%]">
			{page === '1' ? (
				<>
					{questions1.map((q, idx) => (
						<div key={idx}>
							<Question question={q.question} />
							<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
								<QuestionInputBox img={q.img} type={q.type} info={q.info} />
							</div>
						</div>
					))}
					<QuestionRadio />
				</>
			) : (
				<div className="h-full">
					{questions2.map((q, idx) => (
						<div key={idx} className="flex flex-col justify-center h-[33.3%]">
							<Question question={q.question} />
							{q.type === 'multiToggle' ? (
								<div className="w-full mt-2 mb-[3vh] py-2 px-1">
									<QuestionMultiToggle />
								</div>
							) : (
								<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
									<QuestionInputBox img={q.img} type={q.type} info={q.info} />
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default QuestionBox;
