import { useState } from 'react';
import './JournalForm.css';


export default function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		const inputData = event.target.value;
		setInputData(inputData);
	};

	return (
		<>
			<input type="text" value={inputData} onChange={inputChange} />
		</>
	);
}