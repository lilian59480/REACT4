import React from 'react';
import TaskList from '../TaskList/TaskList';
import Storage from '../Storage';
import { compose, withState, lifecycle } from 'recompose';

const localStorageReaderDidMount = (setStorage) => {
	const storage = new Storage();
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
	withState('storage', 'setStorage', null),
	lifecycle({
		componentDidMount () {
			localStorageReaderDidMount(this.props.setStorage);
		}
	})
);

export default enhance(LocalStorageReader);
