import './JournalItem.css';

export default function JournalItem({ title, text, date }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<p className='journal-item__date'>{formatedDate}</p>
				<p className='journal-item__text'>{text}</p>
			</h2>
		</>
	);
}