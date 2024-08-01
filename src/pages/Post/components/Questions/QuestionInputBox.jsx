import QuestionType from './QuestionType';

const QuestionInputBox = ({ img, type }) => {
	return (
		<div className="gap-3 flex">
			<img src={img} />
			<QuestionType type={type} />
		</div>
	);
};

export default QuestionInputBox;
