import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthorized = () => {
	return (
		<div className="flex flex-col gap-4 justify-center items-center">
			<h1 className=" text-[50px]">접근 권한이 없습니다</h1>
			<Link to="/login" className="bg-Blue-300 w-36 py-2 rounded-xl flex justify-center text-white">
				로그인 하러 가기
			</Link>
		</div>
	);
};

export default UnAuthorized;
