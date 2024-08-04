import { Map, MapMarker } from 'react-kakao-maps-sdk';

import useGeoLocation from '../../../../hook/useGeolocation';

import Question from './Question';
import QuestionInputBox from './QuestionInputBox';
import GeoSearchInput from './GeoSearchInput';

import { useRecoilState } from 'recoil';
import { GeoInfo } from '../../../../stores/atoms/GeoInfo';
import { useContext, useEffect } from 'react';
import { PostContext } from '../../../../context/PostContext';

import { Spin } from 'antd';

const QuestionGeo = () => {
	let questions = [
		{
			question: '인터뷰/실험 장소를 진행하는 장소를 구체적으로 입력해주세요',
			img: '/img/postsub7.svg',
			type: 'text',
			info: 'location', // api 이름보고 다시수정
		},
		{
			question: '설문조사 링크를 입력해주세요 (선택사항)',
			img: '/img/postsub8.svg',
			type: 'text',
			info: 'surveylink',
		},
		{
			question: '지원자와 연락할 링크를 입력해주세요 ex. 카카오톡 오픈 채팅방 (필수사항)',
			img: '/img/postsub9.svg',
			type: 'text',
			info: 'contactlink',
		},
	];

	const geolocation = useGeoLocation();

	const [geoInfo, setGeoInfo] = useRecoilState(GeoInfo);
	const { postData, setPostData } = useContext(PostContext);

	useEffect(() => {
		if (geolocation.loaded) {
			setGeoInfo({
				...geoInfo,
				location_latitude: geolocation.coordinates.lat,
				location_longitude: geolocation.coordinates.lng,
			});
		}
	}, []);

	useEffect(() => {
		setPostData((prev) => ({
			...prev,
			location_name: geoInfo.locationName,
			location_latitude: geoInfo.location_latitude,
			location_longitude: geoInfo.location_longitude,
		}));
	}, [geoInfo]);

	return (
		<div className="px-[10%] w-full h-full">
			{questions.map((q, idx) => (
				<div key={idx} className="flex flex-col justify-center">
					<Question question={q.question} />
					<div
						className={`w-full ${idx === 0 ? 'mb-[1vh] mt-3' : 'mb-[3vh] border border-x-0 border-t-0 border-b-2 border-black py-2 px-1 mt-2'} `}
					>
						{idx === 0 ? <GeoSearchInput /> : <QuestionInputBox img={q.img} type={q.type} info={q.info} />}
					</div>
					{idx === 0 ? (
						<div id="map" className="w-full h-[192px] mb-[3vh] flex justify-center items-center">
							{geolocation.loaded ? (
								<Map
									center={{
										lat: geoInfo.location_latitude,
										lng: geoInfo.location_longitude,
									}}
									className="w-full h-full"
								>
									<MapMarker
										style={{ border: 'tranparent' }}
										position={{
											lat: geoInfo.location_latitude,
											lng: geoInfo.location_longitude,
										}}
									/>
								</Map>
							) : (
								<Spin />
							)}
						</div>
					) : null}
				</div>
			))}
		</div>
	);
};

export default QuestionGeo;
