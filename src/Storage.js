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

	getOneByTitle (title) {
		return this.data.find(element => title === element.title);
	}

	add (title, description, beginDate, endDate) {
		this.data.push({
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
