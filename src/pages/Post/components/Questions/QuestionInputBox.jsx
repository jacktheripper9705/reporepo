import QuestionType from './QuestionType';

const QuestionInputBox = ({ img, type, info }) => {
	return (
		<div className="gap-3 flex">
			<img src={img} />
			<QuestionType type={type} info={info} />
		</div>
	);
};

export default QuestionInputBox;
