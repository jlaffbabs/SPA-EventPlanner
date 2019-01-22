let submitButton = document.getElementById('button');

submitButton.addEventListener('click', function(){

  let eventDescription = document.getElementById('desc').value;

  let eventDate = document.getElementById('date').value;

  let eventTime = document.getElementById('time').value;

  let eventNew = new Event(eventDescription, eventDate, eventTime);

  let eventAdd = document.createElement("P");

  eventAdd.innerText = `${eventNew.description} \n ${eventNew.date} \n ${eventNew.time}`;

  let eventListing = document.getElementById('eventListing');

  eventListing.append(eventAdd);
});
