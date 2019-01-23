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
    const futureEvent = new Event("JAG's BBQ: Fun for everyone", "22/10/2019", "08:00")
    const pastEvent = new Event("JAG's Lido Party", "22/01/2018", "07:00")
    testCalendar.add(futureEvent)
    console.log(futureEvent) //** future event is definitely logged
    testCalendar.add(pastEvent)
    console.log(pastEvent) //** past event is definitely logged
    console.log(testCalendar.events) //** BOTH events are definitely added
    console.log(testCalendar.events[0].date) // Date comes out in 22/10/2019 format
    console.log(testCalendar.sort())
    
    expect(testCalendar.sort()).toBe([futureEvent])
  })
})

// c = new Calendar();
// p = new Event("p desc", "01/01/2001", "01:00");
// n = new Event("n desc", "22/01/2019", "01:00");
// f = new Event("f desc", "22/10/2019", "01:00");

// c.add(p);
// c.add(f);
// c.add(n);

// console.log(c.sort());