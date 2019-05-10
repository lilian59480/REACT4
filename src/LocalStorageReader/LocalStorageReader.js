import React from 'react';
import TaskList from '../TaskList/TaskList';
import Manager from '../Manager/Manager';
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
		<div>
			<TaskList tasks={storage} />
			<Manager tasks={storage} />
		</div>
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
