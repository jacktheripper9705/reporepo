import { Outlet } from 'react-router-dom';

const Post = () => {
	return (
		<>
			모집글 작성하기
			<Outlet />
		</>
	);
};

export default Post;
