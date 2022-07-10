import UseEffectCleanup from './hooks/UseEffectCleanup';
import UseEffectExample from './hooks/UseEffectExample';
import UseStateExample from './hooks/UseStateExample';

function App() {
	return (
		<div className='App'>
			{/* uncomment the proper component to render */}

			{/* useState */}
			{/* <UseStateExample /> */}

			{/* useEffect */}
			{/* <UseEffectExample /> */}
			<UseEffectCleanup />
		</div>
	);
}

export default App;
