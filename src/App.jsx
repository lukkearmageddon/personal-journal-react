import './App.css';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './Layout/LeftPanel/LeftPanel';
import Body from './Layout/Body/Body';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

// const INITIAL_DATA = [
// 	{
// 		"id": "1",
// 		"title": "Подготовка к обновлению курсов",
// 		"text": "Горные походы открывают удивительные природные ландшафты",
// 		"tag": "tag",
// 		"date": "2024/07/32"
// 	},
// 	{
// 		"id": "2",
// 		"title": "Поход в горы",
// 		"text": "Тут должен быть другой текст, но его нет.",
// 		"tag": "tag",
// 		"date": "2024/07/32"
// 	}
// ]

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(prev => [...prev, {
			id: prev.length > 0 ? Math.max(...prev.map(i => i.id)) + 1 : 1,
			title: item.title,
			date: new Date(item.date),
			tag: item.tag,
			text: item.post
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
