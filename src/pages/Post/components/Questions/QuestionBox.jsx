import Question from './Question';
import QuestionInputBox from './QuestionInputBox';
import QuestionRadio from './QuestionRadio';

const QuestionBox = ({ page }) => {
	let questions1 = [
		{
			question: '공고 제목을 입력해주세요',
			img: '/img/postsub1.svg',
			type: 'text',
		},
		{
			question: '모집 기간을 입력해주세요',
			img: '/img/postsub2.svg',
			type: 'date',
		},
		{
			question: '모집 인원을 입력해주세요',
			img: '/img/postsub3.svg',
			type: 'number',
		},
	];

	let questions2 = [
		{
			question: '인터뷰 예상 소요시간은 얼마나 걸리나요?',
			img: '/img/postsub4.svg',
			type: 'number',
		},
		{
			question: '인터뷰/ 실험 보상을 제안해주세요',
			img: '/img/postsub5.svg',
			type: 'text',
		},
		{
			question: '인터뷰/실험 장소를 진행하는 대학교를 선택해주세요',
			img: '/img/postsub6.svg',
			type: 'text',
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
								<QuestionInputBox img={q.img} type={q.type} />
							</div>
						</div>
					))}
					<QuestionRadio />{' '}
				</>
			) : (
				<div className="h-full">
					{questions2.map((q, idx) => (
						<div key={idx} className="flex flex-col justify-center h-[33.3%]">
							<Question question={q.question} />
							<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
								<QuestionInputBox img={q.img} type={q.type} />
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default QuestionBox;
