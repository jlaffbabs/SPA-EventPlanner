class Calendar {
  constructor() {
    this.events = [];
    }

  add(event) {
    this.events.push(event);
  }

  dateMatcher() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd='0'+dd
    } 

    if(mm<10) {
      mm='0'+mm
    } 

    today = dd+'/'+mm+'/'+yyyy;
    return today
    }

  sort() {
    let events = this.events;
    let future = [];
    let calendarForMatching = new Calendar
    events.forEach(function(event) {

      console.log(event.date) // 22/10/2019, 22/01/2018
      console.log(calendarForMatching.dateMatcher()) //23/01/2019
      console.log((event.date <= calendarForMatching.dateMatcher()))
      if (event.date >= calendarForMatching.dateMatcher()) {
        future.push(event);
      }
    })
    return future;
    }
  
}
