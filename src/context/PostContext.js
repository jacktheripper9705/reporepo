import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const [postData, setPostData] = useState({
		title: null,
		location_latitude: null,
		location_longitude: null,
		location_name: null,
		isUntact: null,
		reward: null,
		requirements: null,
		contactlink: null,
		surveylink: null,
		startdate: '2023-08-01',
		enddate: '2023-08-31',
		duration: 'Hour1',
		universityId: null,
		people: null,
	});

	return <PostContext.Provider value={{ postData, setPostData }}>{children}</PostContext.Provider>;
};
