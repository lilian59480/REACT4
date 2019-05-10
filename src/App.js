import React from 'react';
import TaskList from './TaskList/TaskList';
import './App.css';

function App () {
	const taskLists = [
		{
			title: 'Test',
			description: 'Desc',
			beginDate: new Date(),
			endDate: new Date()
		},
		{
			title: 'Test2',
			description: 'Desc2',
			beginDate: new Date(),
			endDate: new Date()
		},
		{
			title: 'Test3',
			description: 'Desc3',
			beginDate: new Date(),
			endDate: new Date()
		}
	];

	return (
		<div className="App">
			<TaskList tasks={taskLists} />
		</div>
	);
}

export default App;
