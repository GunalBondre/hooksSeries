import React, { useState } from 'react';

const useStateExample = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div>{count}</div>
			<div>
				<button onClick={() => setCount(count + 1)}>Add</button>
			</div>
		</div>
	);
};

export default useStateExample;
