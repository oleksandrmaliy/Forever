import './App.css';

const App = () => {
	const remInPx = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);
	console.log(`1rem = ${remInPx}px`);

	return (
		<>
			<p className='p-4 text-2xl font-bold text-amber-900 m-10'>
				Welcome to Forever!
			</p>
		</>
	);
};

export default App;
