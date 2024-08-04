import moment from 'moment';

export function newArray(start, end) {
	const result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}
	return result;
}

export function disabledDate(current) {
	const date = moment();
	date.hour(0);
	date.minute(0);
	date.second(0);
	return current.isBefore(date); // can not select days before today
}

export const format = (v) => {
	return v ? v.format('YYYY-MM-DD') : '';
};

export const isValidRange = (v) => {
	return v && v[0] && v[1];
};
