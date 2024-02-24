import { useEffect, useReducer, useState } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

export default function JournalForm({ onSubmit }) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
		}
	}, [isFormReadyToSubmit]);

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({ type: 'SUBMIT', payload: formProps });
	};

	return (
		<form className={cn(styles['journal-form'])} onSubmit={addJournalItem}>
			<div>
				<input type="text" name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})} />
			</div>
			<div className={styles['form-row']}>
				<label className={styles['form-label']} htmlFor="date">
					<img src="/src/assets/date.svg" alt="date icon" />
					<span>Date</span>
				</label>
				<input type="date" name='date' id="date" className={cn(styles['input'], {
					[styles['invalid']]: !isValid.date
				})} />
			</div>
			<div className={styles['form-row']}>
				<label className={styles['form-label']} htmlFor="tag">
					<img src="/src/assets/folder.svg" alt="folder icon" />
					<span>Tag</span>
				</label>
				<input type="text" name='tag' id='tag' className={cn(styles['input'])} />
			</div>
			<textarea
				name='post'
				id='post'
				cols="30"
				rows='10'
				className={cn(styles['input'], { [styles['invalid']]: !isValid.post })}
			></textarea>
			<Button text="Save" />
		</form>
	);
}