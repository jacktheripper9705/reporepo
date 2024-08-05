const fetchSearchLocation = async ({ inputValue }) => {
	const { kakao } = window;
	const ps = new kakao.maps.services.Places();

	return new Promise((resolve, reject) => {
		ps.keywordSearch(inputValue, (data, status) => {
			if (status === kakao.maps.services.Status.OK) {
				resolve(data);
			} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
				resolve([]);
			} else if (status === kakao.maps.services.Status.ERROR) {
				reject(new Error('검색 오류'));
			}
		});
	});
};

export default fetchSearchLocation;
