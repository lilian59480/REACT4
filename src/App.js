import React, { Component } from 'react';
import LocalStorageReader from './LocalStorageReader/LocalStorageReader';
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
	return (
		<div>
			<LocalStorageReader />
			<Button onClick={this.handleOpen}>Open Modal</Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.open}
				onClose={this.handleClose}
			>
				<Manager />
			</Modal>
		</div>
	);
	}
}

export default App;
