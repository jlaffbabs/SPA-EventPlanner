describe('Calendar', () => {
  it('saves a user event', () => {
    let event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    let calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0]).toBe(event)
  })
    it('saves a user event description', () => {
    let event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    let calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  })
    it('saves a user event time', () => {
    let event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    let calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].time).toBe("08:00")
  })
    it('saves a user event date', () => {
    let event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    let calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].date).toBe("10/10/2019")
  })

  it('only displays upcoming events', () => {
    let testCalendar = new Calendar
    let futureEvent = new Event("JAG's BBQ: Fun for everyone", "2019/10/23", "08:00")
    let pastEvent = new Event("JAG's Lido Party", "2018/08/19", "07:00")
    let anotherfutureEvent = new Event("JAG", "2019/03/18", "06:00")
    testCalendar.add(futureEvent)
    testCalendar.add(pastEvent)
    let sortedCalendar = testCalendar.futureEvents()
    expect(sortedCalendar[0].date).toBe("2019/10/23")
  })

  it('renders a div with 2 events', () => {
    let e1 = {date: "2019/04/19", elementToDisplay: function() {return document.createElement('div')} }
    let e2 = {date: "2029/04/19", elementToDisplay: function() {return document.createElement('div')} }
    let calendar = new Calendar
    calendar.add(e1)
    calendar.add(e2)
    expect(calendar.render().childElementCount).toBe(2)
  })

  it('returns upcoming events in chronological order', () => {
    let e1 = {date: "2019/04/19"}
    let e2 = {date: "2020/04/19"}
    let e3 = {date: "2019/06/23"}
    let e4 = {date: "2019/02/01"}
    let calendar = new Calendar;
    calendar.add(e1);
    calendar.add(e2);
    calendar.add(e3);
    calendar.add(e4);
    let sortedCalendar = calendar.sortUpcoming();
    expect(sortedCalendar[0]).toBe(e4)
    expect(sortedCalendar[1]).toBe(e1)
    expect(sortedCalendar[2]).toBe(e3)
    expect(sortedCalendar[3]).toBe(e2)
  })
})
