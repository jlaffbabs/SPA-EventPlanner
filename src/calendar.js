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
      console.log('inside forEach')
      if (event.date === '10/10/2019') {
      console.log('inside if')
        future.push(event);
        // console.log('after push')
      }
    })
    console.log(future);
    return future;
  }
}
