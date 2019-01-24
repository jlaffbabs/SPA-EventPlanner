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
  
  render() {
    let div = document.createElement('div');
    this.futureEvents().forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }
}

