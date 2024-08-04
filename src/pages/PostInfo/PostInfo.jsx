import { useLocation } from 'react-router-dom';
import PostView from '../../components/Layout/PostView';

const PostInfo = () => {
	const location = useLocation();
	const path = location.pathname;

	const isMyLists = path.startsWith('/mylists');
	const isPosts = path.startsWith('/posts');

	return (
		<>
			{isMyLists && <PostView btn1="수정하기" btn2="삭제하기" />}
			{isPosts && <PostView btn1="서로 도와주기" btn2="지원하기" />}
		</>
	);
};

export default PostInfo;
