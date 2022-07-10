import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShow(true), 3000);
		return () => {
			console.log('timeout cleared');
			return clearTimeout(timer);
		};
	});

	return <div>{show && 'Hello World'}</div>;
};

export default UseEffectCleanup;
