import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton';

export default function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<img src="/src/assets/plus.svg" alt="plus" width={20} />
			<span>New memory</span>
		</CardButton>
	);
}