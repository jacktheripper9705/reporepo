import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const Modal = ({ modalState, setModalState }) => {
	return (
		<Dialog open={modalState} onClose={setModalState} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="my-3 text-center sm:mt-0 sm:text-left w-full">
									<DialogTitle
										as="h3"
										className="text-base font-semibold leading-6 pb-2 text-[#999999]"
									>
										학교
									</DialogTitle>
									<div className="mb-3 flex border border-[#999999] rounded-md">
										<input
											type="text"
											placeholder="학교명을 입력해주세요."
											className=" mr-3 flex-1 pl-3 focus:outline-none border-none rounded-md"
										/>
										<button type="submit" className="px-2 py-1 rounded-sm flex-2">
											<img src="/img/search.svg" />
										</button>
									</div>
									<div className="w-auto h-80 flex flex-col p-2 rounded-sm">
										{/* map으로 구현 예정. 검색 결과가 0이라면, "검색 결과가 없습니다." 노출 */}
										<p className="py-1 cursor-pointer">서울대학교</p>
										<p className="py-1">서강대학교</p>
										<p className="py-1">서울과학기술대학교</p>
										<p className="py-1">서울여자대학교</p>
										<p className="py-1">건국대학교</p>
										<p className="py-1">고려대학교</p>
										<p className="py-1">연세대학교</p>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};
export default Modal;
