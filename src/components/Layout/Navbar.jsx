import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="h-[72px] absolute top-0 flex justify-around items-center w-full bg-white">
			<Link to="/">
				<img src="/img/logo.svg" alt="메인 Logo" />
			</Link>
			<div className="flex-template gap-8 text-Blue-300">
				<Link to="/">Home</Link>
				<Link to="/applicants">지원자 List</Link>
				<Link to="/mylists">작성한 글</Link>
				<Link to="/login" className="bg-Blue-300 py-2 px-4 rounded-xl text-white">
					로그인
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
