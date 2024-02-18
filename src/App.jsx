import './App.css';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './Layout/LeftPanel/LeftPanel';
import Body from './Layout/Body/Body';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	text: 'Горные походы открывают удивительные природные ландшафты',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в горы',
	// 	text: 'Тут должен быть другой текст, но его нет.',
	// 	date: new Date()
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	const addItem = item => {
		setItems(prev => [...prev, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: Math.max(...prev.map(i => i.id)) + 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div >
	);
}

export default App;
