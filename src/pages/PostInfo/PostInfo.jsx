// import { useLocation } from 'react-router-dom';
import PostView from '../../components/Layout/PostView';
import { useContext, useEffect, useState } from 'react';
import { ReadContext } from '../../context/ReadContext';
import { getTargetPostInfo } from './api/PostInfoApi';

import { Spin } from 'antd';
import { useLocation } from 'react-router-dom';

const PostInfo = () => {
	const [isLoading, setIsLoading] = useState(true);

	const { readData, setReadData } = useContext(ReadContext);

	// 모집글 리스트에서 받아온 id
	const postId = 14;

	useEffect(() => {
		const getPostsInfo = async () => {
			const data = await getTargetPostInfo(postId);

			setReadData((prev) => ({ ...prev, ...data }));
			setIsLoading(false);
		};
		getPostsInfo();
	}, []);

	if (isLoading) {
		return <Spin />;
	}

	return (
		<>
			{!isLoading && readData.author && <PostView btn1="수정하기" btn2="삭제하기" />}
			{!isLoading && !readData.author && <PostView btn1="서로 도와주기" btn2="지원하기" />}
		</>
	);
};

export default PostInfo;
