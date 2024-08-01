import SingleInputDateRangePicker from '../../../../components/common/DateRangePicker';

const QuestionType = ({ type }) => {
	return (
		<>
			{type === 'date' ? (
				<SingleInputDateRangePicker />
			) : (
				<input type={type} className="border-none w-[90%] focus:outline-none" />
			)}
		</>
	);
};

export default QuestionType;
