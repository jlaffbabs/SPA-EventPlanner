window.addEventListener('load', function() { 
  let calendar = new Calendar();
  window.cal = calendar;

  let submitButton = document.getElementById('button');
  submitButton.addEventListener('click', function(){
    let eventDescription = document.getElementById('desc')
    let eventDate = document.getElementById('date')
    let eventTime = document.getElementById('time')
    let eventNew = new Event(eventDescription.value, eventDate.value, eventTime.value);
    eventDescription.value = eventDate.value = eventTime.value = "";
    console.log(eventDescription.value);
    calendar.add(eventNew);
    display() ;
  });

  const display = () => {
    let eventsDiv = document.getElementById('eventListing');
    events = calendar.render();
    eventsDiv.innerHTML = "";
    eventsDiv.appendChild(events);
  }
})
