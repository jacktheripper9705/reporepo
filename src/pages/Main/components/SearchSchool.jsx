import { useEffect, useState } from 'react';
import SearchSchoolList from './SearchScoolList';
import { searchSchool } from '../../Login/api/LoginApi';

const SearchSchool = () => {
	const [searchName, setSearchName] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [boxState, setBoxState] = useState(false);

	const handleSearch = (e) => {
		setSearchName(e.target.value);
	};

	useEffect(() => {
		const getSearchSchools = async (inputs) => {
			if (searchName) {
				const data = await searchSchool(inputs);

				setSearchResults(data);
			}
		};

		getSearchSchools(searchName);
	}, [searchName]);

	useEffect(() => {
		if (searchResults.length && searchName) {
			setBoxState(true);
		} else {
			setBoxState(false);
		}
	}, [searchResults, searchName]);

	return (
		<div className="w-full h-[204px] border flex gap-[42px] px-[25px] bg-white rounded-2xl pt-[25px]">
			<p className="text-[12px]">대학교 선택</p>
			<div className="flex flex-col relative w-[75%]">
				<div className="flex w-full h-[43px] relative">
					<input
						type="text"
						className="border border-[#999999] w-full focus:outline-none px-2 rounded-l-lg"
						onChange={handleSearch}
						// value={geoInfo.locationName ? geoInfo.locationName : searchName}
					/>
					<img src="/img/search_white.svg" className="p-2 rounded-r-lg bg-Blue-300 cursor-pointer" />
					{boxState ? (
						<div className="w-full h-[150px] absolute top-full left-0 border border-[#999999] rounded-lg z-10 bg-white flex flex-col justify-start items-center overflow-auto mt-2">
							{searchResults.map((name, idx) => (
								<div
									key={idx}
									className="w-[94%] h-[30px] hover:bg-Blue-100/75 cursor-pointer z-40 py-1"
									// onClick={() => handleLocationSelect(location.place_name, location.x, location.y)}

									// name.id 뽑아내기
								>
									<SearchSchoolList schoolName={name.name} />
								</div>
							))}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default SearchSchool;
