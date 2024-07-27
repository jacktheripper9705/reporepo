import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="bg-[#F5F5F5] w-full h-full">
			<div className="flex-template h-full">
				<img src="/img/whaleIcon.svg" alt="돌고래 아이콘" className="mr-4" />
				<div>
					<img src="/img/loginTitle.svg" alt="로그인 환영글" className="mb-5" />
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
