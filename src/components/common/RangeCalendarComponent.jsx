import React, { useContext, useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { PostContext } from '../../context/PostContext';

const { RangePicker } = DatePicker;

const RangeCalendarComponent = () => {
	const [dates, setDates] = useState([null, null]);
	const [formattedDates, setFormattedDates] = useState([null, null]);

	const { postData, setPostData } = useContext(PostContext);

	useEffect(() => {
		setPostData((prev) => ({ ...prev, startdate: formattedDates[0], enddate: formattedDates[1] }));
	}, [formattedDates]);

	const onChange = (dates) => {
		setDates(dates);
		if (dates) {
			setFormattedDates([
				dates[0] ? dates[0].format('YYYY-MM-DD') : null,
				dates[1] ? dates[1].format('YYYY-MM-DD') : null,
			]);
		} else {
			setFormattedDates([null, null]);
		}
	};

	return (
		<RangePicker
			value={dates}
			onChange={onChange}
			format="YYYY-MM-DD"
			disabledDate={(current) => current && current < moment().endOf('day')}
			placeholder={['시작 날짜', '종료 날짜']}
		/>
	);
};

export default RangeCalendarComponent;
