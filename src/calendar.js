class Calendar {
  constructor() {
    this.events = [];
    this.future = [];
    }

  add(event) {
    this.events.push(event);
  }

  
  sort() {
    let events = this.events;
    let future = this.future;
    let today = new Date;
    events.forEach(function(event) {
      let userDate = new Date(event.date);
      if (userDate >= today) {
        future.push(event);
      }
    })
    return future;
  }
  
  elementToDisplay() {
    let div = document.createElement('div');
    this.sort().forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }
}

