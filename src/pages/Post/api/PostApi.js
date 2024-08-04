import * as API from '../../../api/Api';

export const submitPosts = async (postInfoBody) => {
	return await API.post('/posts', postInfoBody);
};
