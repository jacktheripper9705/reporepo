import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	// let token = undefined;
	let token = 'token';

	return (
		<div className={`h-[72px] absolute top-0 flex justify-between px-[15vw] items-center w-full bg-white`}>
			<Link to="/">
				<img src="/img/logo.svg" alt="메인 Logo" />
			</Link>

			<div className="flex-template gap-8 text-Blue-300">
				{token && (
					<>
						<Link to="/">Home</Link>
						<Link to="/applicants">지원자 List</Link>
						<Link to="/mylists">작성한 글</Link>
					</>
				)}
				<Link to="/login" className="bg-Blue-300 py-2 px-4 rounded-xl text-white">
					{token ? '로그아웃' : '로그인'}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
