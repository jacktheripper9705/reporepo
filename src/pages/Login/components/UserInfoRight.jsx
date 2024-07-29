import React from 'react';
import { useState } from 'react';

const UserInfoRight = ({ modalState, setModalState }) => {
	const [name, setName] = useState('');
	const [school, setSchool] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = () => {
		console.log(name, school);
	};

	const handleSchoolClick = () => {
		setModalState(true);
	};
	return (
		<form className="flex flex-col font-pretendardLight z-10" onSubmit={handleSubmit}>
			<p className="text-[25px] mb-[24px]">
				<b className="font-pretendardBold">이름</b>을 입력하세요
			</p>
			<input
				type="text"
				placeholder="Enter Your Name"
				className="h-[62px] w-[369px] bg-[#E0F8FF] rounded-lg pl-4 mb-[30px] placeholder:text-[#00AEFF] focus:outline-none focus:border-[#00AEFF] focus:ring-Blue-100 focus:ring-2"
				onChange={handleNameChange}
			/>

			<p className="text-[25px] mb-[24px]">
				<b className="font-pretendardBold">재학중인 대학교</b>를 선택하세요
			</p>
			<input
				type="text"
				placeholder="Enter Your College"
				value={school}
				className="h-[62px] w-[369px] bg-[#E0F8FF] rounded-lg pl-4 mb-[30px] placeholder:text-[#00AEFF] focus:outline-none focus:border-[#00AEFF] focus:ring-Blue-100 focus:ring-2"
				onClick={handleSchoolClick}
			/>

			<button type="submit" className="h-[59px] rounded-lg bg-[#00AEFF] text-white">
				Go Lab 시작하기
			</button>
		</form>
	);
};

export default UserInfoRight;
