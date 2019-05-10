import React from 'react';
import Task from './Task/Task';
import './App.css';

function App () {
	return (
		<div className="App">
			<Task title="Test" description="Desc" beginDate={new Date()} endDate={new Date()} />
			<Task title="Test2" description="Desc" beginDate={new Date()} endDate={new Date()} />
			<Task title="Test3" description="Desc" beginDate={new Date()} endDate={new Date()} />
		</div>
	);
}

export default App;
