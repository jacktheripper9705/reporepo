import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function KakaoRedirect() {
	const token = new URL(window.location.href).searchParams.get('accessToken');
	const isRegister = new URL(window.location.href).searchParams.get('isRegisterComplete');
	const navigate = useNavigate();

	useEffect(() => {
		async function KakaoLogin() {
			sessionStorage.setItem('accessToken', token);
		}
		KakaoLogin();
		console.log(isRegister);
		if (isRegister === 'true') {
			navigate('/', { replace: true });
		} else {
			navigate('/login/userinfo', { replace: true });
		}
	}, []);

	return;
}

export default KakaoRedirect;
