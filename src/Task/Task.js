import React from 'react';
import Proptypes from 'prop-types';
import './Task.css';

/**
 * Un titre
 * Une description
 * Date et heure de début
 * Date et heure de fin
 *
 */
class Task extends React.Component {
	render () {
		const { title, description, beginDate, endDate } = this.props;

		return (
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<p>{beginDate.toUTCString()}</p>
				<p>{endDate.toUTCString()}</p>
			</div>
		);
	}
}

Task.propTypes = {
	title: Proptypes.string,
	description: Proptypes.string,
	beginDate: Proptypes.instanceOf(Date),
	endDate: Proptypes.instanceOf(Date)
};

export default Task;
