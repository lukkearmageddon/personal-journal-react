import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';


export default function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		const inputData = event.target.value;
		setInputData(inputData);
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title' />
			<input type="date" name='date' />
			<input type="text" name='tag' value={inputData} onChange={inputChange} />
			<textarea name='post' id='post' cols="30" rows='10'></textarea>
			<Button text="Save" onClick={() => { console.log('button has pressed!'); }}></Button>
		</form>
	);
}