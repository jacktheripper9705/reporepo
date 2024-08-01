import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../components/common/Modal';
import ModalPostComplete from './ModalPostComplete';

const PageButton = ({ page, text, className }) => {
	const buttonClass = clsx('py-2 w-[429px] rounded-3xl text-white', className);
	const [modalState, setModalState] = useState(false);

	const handleModalOpen = () => {
		setModalState(true);
	};

	return (
		<div className="flex flex-col justify-center items-center mt-[21px]">
			<Modal modalState={modalState} setModalState={setModalState}>
				<ModalPostComplete modalState={modalState} setModalState={setModalState} />
			</Modal>
			<p className="text-[#999999] mb-[15px] text-[13px]">{page}</p>
			{page === '1 / 2' ? (
				<Link to="/post/detail">
					<button className={buttonClass}>{text}</button>
				</Link>
			) : (
				<button className={buttonClass} onClick={handleModalOpen}>
					{text}
				</button>
			)}
		</div>
	);
};

export default PageButton;
