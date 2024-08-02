import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalPostComplete from './ModalPostComplete';
import PostModal from '../../../components/common/PostModal';

const PageButton = ({ page, text, className }) => {
	const buttonClass = clsx('py-2 w-[429px] rounded-3xl text-white', className);

	const [isOpen, setIsOpen] = useState(false);

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	return (
		<div className="flex flex-col justify-center items-center mt-[21px]">
			<PostModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<ModalPostComplete isOpen={isOpen} setIsOpen={setIsOpen} />
			</PostModal>
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
