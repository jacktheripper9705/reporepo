import Question from './Question';
import QuestionInputBox from './QuestionInputBox';

const QuestionGeo = () => {
	let questions = [
		{
			question: '인터뷰/실험 장소를 진행하는 장소를 구체적으로 입력해주세요',
			img: '/img/postsub7.svg',
			type: 'text',
		},
		{
			question: '설문조사 링크를 입력해주세요(선택사항)',
			img: '/img/postsub8.svg',
			type: 'text',
		},
		{
			question: '지원자와 연락할 링크를 입력해주세요 ex. 카카오톡 오픈 채팅방 (필수사항)',
			img: '/img/postsub9.svg',
			type: 'text',
		},
	];

	return (
		<div className="px-[10%] w-full h-full">
			{questions.map((q, idx) => (
				<div key={idx} className="flex flex-col justify-center">
					<Question question={q.question} />
					<div
						className={`w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 ${idx === 0 ? 'mb-[1vh]' : 'mb-[3vh]'} py-2 px-1`}
					>
						<QuestionInputBox img={q.img} type={q.type} />
					</div>
					{idx === 0 ? (
						<div className="w-full h-[192px] border border-black mb-[3vh]">지도 들어갈 부분</div>
					) : null}
				</div>
			))}
		</div>
	);
};

export default QuestionGeo;
