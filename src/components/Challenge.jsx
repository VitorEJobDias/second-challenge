const Challenge = () => {
	const firstValue = 1;
	const secondValue = 2;

	const handleMyEvent = () => {
		console.log('The sum values: ', firstValue + secondValue)
	};

	return (
		<div>
			<div>
				<span>First value: {firstValue}; Second value: {secondValue}</span>
			</div>
			<div>
				<button onClick={handleMyEvent}>Sume values</button>
			</div>
		</div>
	)
}

export default Challenge