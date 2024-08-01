import { useState } from 'react';
import React from 'react';
import Lists from './Lists';

const MyLists = () => {
	const [post, setPost] = useState([]);
	const [status, setStatus] = useState(false);
	const [title, setTitle] = useState('인터뷰/실험 글 제목');
	const [duration, setDuration] = useState('7/29 ~ 8/9');

	return (
		<div className="px-[8vw] py-10">
			<div className="ml-4 flex flex-wrap pt-14">
				<img src="/img/bookCheck.svg" alt="글 List 이미지" />
				<p className="ml-2 text-2xl font-pretendardSemibold">작성한 글 LIST</p>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[600px]">
				<Lists status={true} title={'안구 측정기를 활용한 문장 읽기 과정 측정'} duration={'8/6 ~ 8/12'} />
				<Lists
					status={true}
					title={'긴급상황 시 자율주행 차량 후면 디스플레이 위치 평가'}
					duration={'8/5 ~ 8/19'}
				/>
				<Lists status={true} title={'만성 발목 불안정성의 동적 자세 조절력 파악'} duration={'7/26 ~ 8/24'} />
				<Lists
					status={false}
					title={'긍정적 과거 기억 회상에 대한 정서 및 기억 후속 실험 연구'}
					duration={'7/3 ~ 7/24'}
				/>
				<Lists
					status={false}
					title={'어절 판단 과제를 통한 한국어 정보 처리 양상 연구'}
					duration={'7/1 ~ 8/1'}
				/>
				<Lists status={false} title={'사회 불안 집단의 얼굴 표정에 대한 불안 인식'} duration={'7/4~ 7/24'} />
				<Lists
					status={false}
					title={'애플리케이션 기반의 공동 투자 사용 경험에 대한 설문'}
					duration={'7/24~ 8/28'}
				/>
				<Lists />
				<Lists />
				<Lists />
				<Lists />
				<Lists />
				<Lists />
			</div>
		</div>
	);
};

export default MyLists;
