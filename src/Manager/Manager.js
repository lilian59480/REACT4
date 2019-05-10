import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

class Manager extends Component {

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
				<Button onClick={this.handleOpen}>Open Modal</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<Button variant="contained" color="primary">
					Create Task
					</Button>
				</Modal>
			</div>
		);
	}
}

export default Manager;
