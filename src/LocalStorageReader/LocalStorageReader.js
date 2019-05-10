import React from 'react';
import TaskList from '../TaskList/TaskList';
import { compose, withState, lifecycle } from 'recompose';

const allContactComponentDidMount = (setStorage) => {
	const storage = JSON.parse(localStorage.getItem('tasks'));
	storage.forEach(element => {
		element.beginDate = new Date(element._beginDateTs);
		element.endDate = new Date(element._endDateTs);
	});
	setStorage(storage);
};

const LocalStorageReader = (props) => {
	const { storage } = props;

	console.log(storage);

	return (
		<TaskList tasks={storage} />
	);
};

const enhance = compose(
	withState('storage', 'setStorage', []),
	lifecycle({
		componentDidMount () {
			allContactComponentDidMount(this.props.setStorage);
		}
	})
);

export default enhance(LocalStorageReader);
