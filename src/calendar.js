class Calendar {
  constructor() {
    this.events = [];
    }

  add(event) {
    this.events.push(event);
  }

  sort() {
    let events = this.events;
    let future = []
    let dateNow = new Date()

    events.forEach(function(event) {
      console.log('%£%£%£%£%£')
      if (event.date === '01/01/2020') {
        future.push(event);
      }
    })
    return future;
  }
}
