export const getAccessToken = () => {
	return sessionStorage.getItem('Authorization');
};

export const getRefreshToken = () => {
	return sessionStorage.getItem('RefreshToken');
};

export const tokenRefresh = async (instance) => {
	const refreshToken = getRefreshToken(); // 리프레시 토큰을 가져오기

	const { data } = await instance.get('/reissue', {
		headers: { 'Content-Type': 'application/json', RefreshToken: `Bearer ${refreshToken}` },
	});

	console.log(data.accessToken);
	const newAccessToken = data.accessToken;
	sessionStorage.setItem('Authorization', newAccessToken); // 세션 스토리지에 액세스 토큰 저장
	console.log('Access token stored:', newAccessToken);
};
