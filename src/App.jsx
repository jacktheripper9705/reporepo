import React from 'react';

import { RecoilRoot } from 'recoil';

import Router from './Router';

import './index.css';
import Navbar from './components/Layout/Navbar';

function App() {
	return (
		<RecoilRoot>
			<div className="App flex-col-template">
				<Navbar />
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
