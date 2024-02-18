import { useState } from 'react';
import './Button.css';

export default function Button() {
	const [bttn, setBttn] = useState('Save');

	const clicked = () => {
		setBttn((prev) => prev + '!');
		// setBttn('Close');
	};

	return (
		<button onClick={clicked} className="button accent">{bttn}</button>
	);
}