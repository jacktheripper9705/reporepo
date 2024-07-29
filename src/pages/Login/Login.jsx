import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="w-full h-full">
			<div className="flex-template h-full mt-[-60px]">
				<img src="/img/whaleIcon.svg" alt="돌고래 아이콘" className="mr-5 mt-[-90px] w-[25vw]" />
				<div className="w-[35vw]">
					<img src="/img/loginTitle.svg" alt="로그인 환영글" className="mb-7 w-full" />
					<Link to="/google">
						<img src="/img/googleLogin.svg" alt="구글 로그인" className="mb-4" />
					</Link>
					<Link to="/kakao">
						<img src="/img/kakaoLogin.svg" alt="카카오 로그인" />
					</Link>
				</div>
			</div>
			<img src="/img/loginBg.svg" alt="파도 배경" className="absolute bottom-0 w-full" />
		</div>
	);
};

export default Login;
