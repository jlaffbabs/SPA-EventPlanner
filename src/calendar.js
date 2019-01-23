class Calendar {
  constructor() {
    this.events = [];
    }

  add(event) {
    this.events.push(event);
  }

  
  sort() {
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
  
}
