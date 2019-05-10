class Storage {
	constructor () {
		const data = JSON.parse(localStorage.getItem('tasks'));
		if (!(data instanceof Array)) {
			this.data = [];
		} else {
			data.forEach(element => {
				element.beginDate = new Date(element._beginDateTs);
				element.endDate = new Date(element._endDateTs);
			});
			this.data = data;
		}
	}

	getAll () {
		return this.data;
	}

	getOneById (id) {
		return this.data.find(element => id === element.id);
	}

	add (id, title, description, beginDate, endDate) {
		this.data.push({
			id,
			title,
			description,
			beginDate,
			endDate,
			_beginDateTs: beginDate.getTime(),
			_endDateTs: endDate.getTime()
		});
	}
}

export default Storage;
