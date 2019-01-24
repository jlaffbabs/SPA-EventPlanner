class Calendar {
  constructor() {
    this.events = [];
    }

  add(event) {
    this.events.push(event);
  }

  
  futureEvents() {
    let events = this.events;
    let future = [];
    let today = new Date;
    events.forEach(function(event) {
      let userDate = new Date(event.date);
      if (userDate >= today) {
        future.push(event);
      }
    })
    return future;
  }
  
  sortUpcoming() {
    let fut = this.futureEvents();
    fut.sort((e1, e2) => {
      let userDate = new Date(e1.date)
      let userDate2 = new Date(e2.date)
      return userDate - userDate2;
    });
    return fut;
  }

  render() {
    let div = document.createElement('div');
    this.sortUpcoming().forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }

}

