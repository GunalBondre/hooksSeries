import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => setTodos(json));
	}, []);

	return (
		<div>
			{todos.map((todo) => {
				return <div key={todo.id}>{JSON.stringify(todo)}</div>;
			})}
		</div>
	);
};

export default UseEffectExample;
