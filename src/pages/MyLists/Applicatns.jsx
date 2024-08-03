import { useState } from 'react';
import Applicant from './Applicant';
import EachHelp from './EachHelp';

const Applicants = () => {
	return (
		<div className="w-full px-[8vw] py-[6vh]">
			<div className="flex ml-11">
				<img src="/img/fileDockSearch.svg" alt="file dock search image" />
				<div className="font-pretendardMedium text-3xl ml-3">지원자 List</div>
			</div>
			<div className="grid grid-cols-2 my-6">
				<div className="mx-10 border-4 rounded-xl bg-white py-10 px-2.5">
					<div className="flex items-center border-b-2 pb-4 mb-14">
						<img className="mx-4 w-8 h-8" src="/img/eachHelpIcon.svg" alt="help icon image" />
						<p className="font-pretendardMedium text-2xl ">서로 돕기</p>
					</div>
					<EachHelp initialState="confirm" />
					<EachHelp initialState="accept" />
					<EachHelp initialState="suggestion" />
				</div>
				<div className="mx-10 border-4 rounded-xl bg-white py-10 px-2.5">
					<div className="flex items-center border-b-2 pb-4 mb-14">
						<img className="mx-4 w-8 h-8" src="/img/applicantIcon.svg" alt="applicant icon image" />
						<p className="font-pretendardSemibold text-2xl ">지원자</p>
					</div>
					<Applicant initialState="confirm" />
					<Applicant initialState="confirm" />
					<Applicant initialState="suggestion" />
				</div>
			</div>
		</div>
	);
};

export default Applicants;
