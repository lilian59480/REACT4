import React from 'react';
import Proptypes from 'prop-types';
import { compose } from 'recompose';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

/**
 * Un titre
 * Une description
 * Date et heure de début
 * Date et heure de fin
 *
 */
const Task = (props) => {
	const { id, title, description, beginDate, endDate, classes } = props;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					#{id} : {beginDate.toUTCString()} - {endDate.toUTCString()}
				</Typography>
				<Typography variant="h5" component="h2">
					{title}
				</Typography>
				<Typography component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">TODO</Button>
			</CardActions>
		</Card>);
};

Task.propTypes = {
	title: Proptypes.string,
	description: Proptypes.string,
	beginDate: Proptypes.instanceOf(Date),
	endDate: Proptypes.instanceOf(Date)
};

const enhance = compose(
	withStyles({
		card: {
			minWidth: 275,
			marginBottom: 12
		},
		title: {
			fontSize: 12
		}
	})
);

export default enhance(Task);
