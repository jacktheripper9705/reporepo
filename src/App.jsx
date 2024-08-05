import React from 'react';

import { RecoilRoot } from 'recoil';

import Router from './Router';

import './index.css';
import Navbar from './components/Layout/Navbar';
import { useLocation } from 'react-router-dom';

function App() {
	const location = useLocation();
	const showNavbar = location.pathname !== '/landing';

	return (
		<RecoilRoot>
			<div className="App">
				{showNavbar && <Navbar />}
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
