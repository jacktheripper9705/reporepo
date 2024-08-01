import { useState } from 'react';
import React from 'react';
import ApplyList from './ApplyList';

const Applies = () => {
	const [post, setPost] = useState([]);
	const [status, setStatus] = useState(false);
	const [title, setTitle] = useState('인터뷰/실험 글 제목');
	const [duration, setDuration] = useState('7/29 ~ 8/9');

	return (
		<div className="container px-[8vw] py-10 mx-auto ">
			<div className="ml-4 flex flex-wrap pt-14">
				<img src="/img/bookCheck.svg" alt="글 List 이미지" />
				<p className="ml-2 text-2xl font-pretendardSemibold">지원한 글 LIST</p>
			</div>
			<div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[600px]">
				<ApplyList
					status={true}
					title={'운전 분노를 조절해주는 동반자형 주행 로봇 경험 실험'}
					duration={'8/6 ~ 8/12'}
				/>
				<ApplyList
					status={true}
					title={'AI 스피커와의 상호작용 경험에 대한 실험 연구'}
					duration={'8/1 ~ 8/13'}
				/>
				<ApplyList
					status={true}
					title={'애플리케이션 기반의 공동 투자 사용 경험에 대한 설문'}
					duration={'7/24 ~ 8/28'}
				/>
				<ApplyList
					status={false}
					title={'생활 자전거 이용에 따른 수송 부분 에너지 절감 실험'}
					duration={'7/3 ~ 7/24'}
				/>
				<ApplyList status={false} title={'경향통 환자의 통증에 대한 경험 연구 실험'} duration={'7/1 ~ 8/1'} />
				<ApplyList status={false} title={'사회 혁신 비즈니스 모델에 대한 인식 인터뷰'} duration={'7/4~ 7/24'} />
				<ApplyList
					status={false}
					title={'애플리케이션 기반의 공동 투자 사용 경험에 대한 설문'}
					duration={'7/24~ 8/28'}
				/>
				<ApplyList />
				<ApplyList />
				<ApplyList />
				<ApplyList />
				<ApplyList />
				<ApplyList />
			</div>
		</div>
	);
};

export default Applies;
