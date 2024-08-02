import { Map, MapMarker } from 'react-kakao-maps-sdk';

import useGeoLocation from '../../../../hook/useGeolocation';

import Question from './Question';
import QuestionInputBox from './QuestionInputBox';
import GeoSearchInput from './GeoSearchInput';

const QuestionGeo = () => {
	let questions = [
		{
			question: '인터뷰/실험 장소를 진행하는 장소를 구체적으로 입력해주세요',
			img: '/img/postsub7.svg',
			type: 'text',
		},
		{
			question: '설문조사 링크를 입력해주세요 (선택사항)',
			img: '/img/postsub8.svg',
			type: 'text',
		},
		{
			question: '지원자와 연락할 링크를 입력해주세요 ex. 카카오톡 오픈 채팅방 (필수사항)',
			img: '/img/postsub9.svg',
			type: 'text',
		},
	];

	const geolocation = useGeoLocation();

	return (
		<div className="px-[10%] w-full h-full">
			{questions.map((q, idx) => (
				<div key={idx} className="flex flex-col justify-center">
					<Question question={q.question} />
					<div
						className={`w-full ${idx === 0 ? 'mb-[1vh] mt-3' : 'mb-[3vh] border border-x-0 border-t-0 border-b-2 border-black py-2 px-1 mt-2'} `}
					>
						{idx === 0 ? <GeoSearchInput /> : <QuestionInputBox img={q.img} type={q.type} />}
					</div>
					{idx === 0 ? (
						<div id="map" className="w-full h-[192px] mb-[3vh]">
							{geolocation.loaded ? (
								<Map
									center={{
										lat: `${geolocation.coordinates.lat}`,
										lng: `${geolocation.coordinates.lng}`,
									}}
									className="w-full h-full"
								>
									<MapMarker
										style={{ border: 'tranparent' }}
										position={{
											lat: `${geolocation.coordinates.lat}`,
											lng: `${geolocation.coordinates.lng}`,
										}}
									/>
								</Map>
							) : (
								<p>지도를 로드 중입니다.</p>
							)}
						</div>
					) : null}
				</div>
			))}
		</div>
	);
};

export default QuestionGeo;
