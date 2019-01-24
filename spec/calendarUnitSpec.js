describe('Calendar', () => {
  it('saves a user event', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0]).toBe(event)
  })
    it('saves a user event description', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  })
    it('saves a user event time', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].time).toBe("08:00")
  })
    it('saves a user event date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].date).toBe("10/10/2019")
  })

  it('only displays upcoming events', () => {
    const testCalendar = new Calendar
    const futureEvent = new Event("JAG's BBQ: Fun for everyone", "2019/10/23", "08:00")
    const pastEvent = new Event("JAG's Lido Party", "2018/08/19", "07:00")
    const anotherfutureEvent = new Event("JAG", "2019/03/18", "06:00")
    testCalendar.add(futureEvent)
    testCalendar.add(pastEvent)
    let sortedCalendar = testCalendar.futureEvents()
    expect(sortedCalendar[0].date).toBe("2019/10/23")
  })

  it('renders a div with 2 events', () => {
    let e1 = {date: "2019/04/19", elementToDisplay: function() {return document.createElement('div')} }
    let e2 = {date: "2029/04/19", elementToDisplay: function() {return document.createElement('div')} }
    const calendar = new Calendar
    calendar.add(e1)
    calendar.add(e2)
    expect(calendar.render().childElementCount).toBe(2)
  })
})
