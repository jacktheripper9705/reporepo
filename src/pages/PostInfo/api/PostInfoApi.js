import * as API from '../../../api/Api';

export const getTargetPostInfo = async (postId) => {
	return await API.get(`/posts/${postId}`);
};

export const deleteTargetPostInfo = async (postId) => {
	return await API.delete(`/posts/${postId}`);
};
