import * as APIx from '../../../api/ApiNotLogin';
import * as API from '../../../api/Api';

export const initialSchools = async () => {
	return await APIx.get('/search');
};

export const searchSchool = async (inputName) => {
	return await APIx.get(`/search?name=${inputName}`);
};

export const submitUserInfo = async (userInfoBody) => {
	return await API.post('/user', userInfoBody);
};
