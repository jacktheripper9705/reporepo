import Profile from './Profile';
import Strike from './Strike';

const Section1 = () => {
	return (
		<div className="w-[30%] h-full flex flex-col gap-[20px]">
			<Profile />
			<Strike />
		</div>
	);
};

export default Section1;
