import React from 'react';
import Proptypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = (props) => {
	const { tasks } = props;

	let render;

	if (tasks !== null) {
		render = tasks.getAll().map(element => {
			const { title, description, beginDate, endDate } = element;
			return (
				<Task
					key={title}
					title={title}
					description={description}
					beginDate={beginDate}
					endDate={endDate}
				/>
			);
		});
	}

	return (
		<div>
			{render}
		</div>
	);
};

TaskList.propTypes = {
	tasks: Proptypes.array
};

export default TaskList;
