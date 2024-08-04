import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Spin } from 'antd';

import useGeoLocation from '../../../hook/useGeolocation';

import Question from '../../Post/components/Questions/Question';

const CategoryBox = ({ position, btn1, btn2 }) => {
	const geolocation = useGeoLocation();

	return (
		<div className="w-full h-full flex flex-col justify-between px-[10%]">
			{position === 'left' ? (
				<div>
					<Question question="모집기간" />
					<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
						<div className="gap-3 flex">
							<img src="/img/postsub4.svg" />
							<p>텍스트 입력 구간</p>
						</div>
					</div>

					<Question question="진행방식" />
					<p className="mt-2 mb-[3vh] py-2 px-6 text-[25px]">대면</p>

					<Question question="인터뷰 예상 소요시간" />
					<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
						<div className="gap-3 flex">
							<img src="/img/timer.svg" />
							<p>텍스트 입력 구간</p>
						</div>
					</div>

					<Question question="인터뷰/실험 장소를 진행하는 장소" />
					<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
						<div className="gap-3 flex">
							<img src="/img/postsub7.svg" />
							<p>텍스트 입력 구간</p>
						</div>
					</div>
					<div id="map" className="w-full h-[25vh] mb-[3vh] flex justify-center items-center">
						{geolocation.loaded ? (
							<Map
								center={{
									lat: '37.3144',
									lng: '127.058',
								}}
								className="w-full h-full"
							>
								<MapMarker
									style={{ border: 'tranparent' }}
									position={{
										lat: '37.3144',
										lng: '127.058',
									}}
								/>
							</Map>
						) : (
							<Spin />
						)}
					</div>
				</div>
			) : (
				<div>
					<Question question="자격 요건 및 주의사항만 입력해주세요" />
					<div className="flex mt-2 gap-3">
						<img src="/img/alert.svg" />
						<p className="font-pretendardLight text-[13px] flex items-center">
							자격 요건 예시 : 대학교 재학 중인 사람 , 교직에 5년 이상 근무해 본 사람 <br />
							주의 사항 예시 : 임산부 및 심신 미약자는 실험 참여가 불가합니다.
						</p>
					</div>
					<div className="h-[25vh] mt-[2vh] border rounded-lg mb-[3vh]">
						<textarea
							className="w-full h-full outline-none rounded-lg p-3 resize-none"
							readOnly
							// onChange={handleInputChange}
							value="머시기저시기"
						/>
					</div>

					<Question question="인터뷰/실험 보상" />
					<div className="w-full border border-x-0 border-t-0 border-b-2 border-black mt-2 mb-[3vh] py-2 px-1">
						<div className="gap-3 flex">
							<img src="/img/postsub5.svg" />
							<p>텍스트 입력 구간</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center">
						<div className="w-[70%] h-[61px] border-2 border-black rounded-3xl flex px-6 gap-3 items-center mb-[3vh]">
							<img src="/img/postsub9.svg" className="w-[30px]" />
							<p>링크 입력 구우우우악ㄴ</p>
						</div>

						{btn1 && btn2 && (
							<div className="flex gap-6">
								<button className="py-2 px-4 bg-Blue-300 rounded-lg text-white border-2 border-Blue-300">
									{btn1}
								</button>
								<button className="py-2 px-4 rounded-lg border-2 border-black">{btn2}</button>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CategoryBox;
