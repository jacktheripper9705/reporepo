const PostTitle = ({ text }) => {
	const goBack = () => {
		window.history.back();
	};
	return (
		<div className="flex pb-6 gap-3">
			<img src="/img/backIcon.svg" alt="뒤로가기아이콘" onClick={goBack} className="cursor-pointer" />
			<img src="/img/postIcon.svg" alt="문서아이콘" />
			<p className="text-[25px]">{text}</p>
		</div>
	);
};

export default PostTitle;
