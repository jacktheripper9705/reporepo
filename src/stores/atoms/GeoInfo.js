import { atom } from 'recoil';

export const GeoInfo = atom({
	key: 'geoInfo',
	default: {
		locationName: '',
		location_latitude: null,
		location_longitude: null,
	},
});
