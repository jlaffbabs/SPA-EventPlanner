class Event {
  constructor(description, date, time, city) {
    this.description = description;
    this.date = date;
    this.time = time;
    this.city = city;
  };

  elementToDisplay() {
  	let div = document.createElement('div')
  	div.innerText = `${this.description} on ${this.date} at ${this.time}`
  	return div;
  };

  
};

