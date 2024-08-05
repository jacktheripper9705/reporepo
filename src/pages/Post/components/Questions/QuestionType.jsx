import RangeCalendarComponent from '../../../../components/common/RangeCalendarComponent';
import { useContext } from 'react';

import { PostContext } from '../../../../context/PostContext';

import { useRecoilState } from 'recoil';
import { userInfo } from '../../../../stores/atoms/selectedUserInfo';
import { modalState } from '../../../../stores/atoms/modalState';

const QuestionType = ({ type, info }) => {
	const { postData, setPostData } = useContext(PostContext);

	const [name, setName] = useRecoilState(userInfo);
	const [, setIsOpen] = useRecoilState(modalState);

	const handleInputChange = (e) => {
		const { value } = e.target;
		setPostData((prev) => ({ ...prev, [info]: value }));
	};

	const handleSchoolClick = () => {
		setIsOpen(true);
	};

	return (
		<>
			{type === 'date' ? (
				// <SingleInputDateRangePicker />
				<RangeCalendarComponent />
			) : info === 'university' ? (
				<input
					type="text"
					className="border-none w-[90%] focus:outline-none"
					onChange={handleInputChange}
					value={name.school}
					onClick={handleSchoolClick}
					readOnly="true"
					placeholder="Choose Your College"
				/>
			) : (
				<input
					type={type}
					className="border-none w-[90%] focus:outline-none"
					onChange={handleInputChange}
					value={postData[info]}
				/>
			)}
		</>
	);
};

export default QuestionType;
