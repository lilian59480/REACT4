import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import Manager from './Manager/Manager';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
	
	state = {
		open: false
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	  };
	
	  render () {
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
			<Button onClick={this.handleOpen}>Open Modal</Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.open}
				onClose={this.handleClose}
        	>
							<Manager />

			</Modal>
			<TaskList tasks={taskLists} />
	</div>

	);
	}
}

export default App;
