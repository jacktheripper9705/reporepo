import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ApplyList = ({ status, title, duration, startDate, endDate }) => {
	const url = '';

	// const showStatus = () => {};

	// const showTitle = () => {
	// 	axios
	// 		.get(url)
	// 		.then((res) => {
	// 			// 성공한 경우
	// 			setTitle(res.data);
	// 			console.log('상태 가져오기 완료 : ', title);
	// 		})
	// 		.catch((err) => {
	// 			console.log('에러 : ', err);
	// 		});
	// };

	// const showDuration = () => {
	// 	axios
	// 		.get(url)
	// 		.then((res) => {
	// 			// 성공한 경우
	// 			setDuration(res.data);
	// 			console.log('상태 가져오기 완료 : ', duration);
	// 		})
	// 		.catch((err) => {
	// 			console.log('에러 : ', err);
	// 		});
	// };

	return (
		<div className={`p-5`}>
			<div
				className={`${status ? 'bg-gray-50 text-black' : 'opacity-80 text-opacity-80'} h-full border-2 border-gray-200 border-opacity-6 rounded-2xl overflow-hidden`}
			>
				<div className="p-6 object-cover object-center">
					<p
						className={`${status ? 'text-green-400' : 'text-red-500'} text-base font-pretendardMedium mb-3 mt-3`}
					>
						{status ? '진행 중' : '마감'}
					</p>
					<h3
						className={`${status ? 'text-black' : 'text-opacity-60'} text-xl font-pretendardBold text-black`}
					>
						{title}
					</h3>
					<p className="text-sm mt-2 font-pretendardLight text-gray-400">
						모집 기간 {'('}
						{duration}
						{')'}
					</p>
				</div>
				<div className="p-6 flex flex-wrap">
					<Link to="/mylists">
						{' '}
						{/* 본인이 작성한 글로 이동 */}
						<p className="font-pretendardLight text-gray-500">Learn more -{'>'}</p>
					</Link>
					<Link className="ml-auto" to="/post">
						{' '}
						{/* 참가자 모집글로 이동 */}
						<img
							src="/img/navigation.svg"
							className="fill-blue-400 ml-auto w-8 h-8"
							alt="navigation images"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ApplyList;
