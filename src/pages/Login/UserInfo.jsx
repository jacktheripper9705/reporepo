import React from 'react';
import { useState } from 'react';

import Modal from '../../components/common/Modal';
import UserInfoLeft from './components/UserInfoLeft';
import UserInfoRight from './components/UserInfoRight';

const UserInfo = () => {
	const [modalState, setModalState] = useState(false);

	return (
		<div className="w-full h-full">
			<Modal modalState={modalState} setModalState={setModalState} />
			<div className="flex justify-around items-center h-full relative mt-[-60px] sm:px-[10vw] px-10">
				<UserInfoLeft />
				<UserInfoRight modalState={modalState} setModalState={setModalState} />
			</div>
			<img src="/img/loginBg.svg" alt="파도 배경" className="absolute bottom-0 w-full z-0" />
		</div>
	);
};

export default UserInfo;
