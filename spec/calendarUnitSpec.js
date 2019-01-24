describe('Calendar', () => {
  let e1 = {description: "JAG's BBQ: Fun for everyone", date: "2019/10/10", time: "08:00", elementToDisplay: function() {return document.createElement('div')}}
  let e2 = {description: "JAG's Lido Party", date: "2019/10/30", time: "08:00", elementToDisplay: function() {return document.createElement('div')}}
  let e3 = {description: "Jacques BBQ", date: "2020/04/19"}
  let e4 = {date: "2019/06/23"}
  let e5 = {date: "2012/02/01"}

  it('saves a user event', () => {
    let calendar = new Calendar
    calendar.add(e1)
    expect(calendar.events[0]).toBe(e1)
  })

    it('saves a user event description', () => {
    let calendar = new Calendar
    calendar.add(e1)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  })

    it('saves a user event time', () => {
    let calendar = new Calendar
    calendar.add(e1)
    expect(calendar.events[0].time).toBe("08:00")
  })

    it('saves a user event date', () => {
    let calendar = new Calendar
    calendar.add(e1)
    expect(calendar.events[0].date).toBe("2019/10/10")
  })

  it('only displays upcoming events', () => {
    let testCalendar = new Calendar
    testCalendar.add(e1)
    testCalendar.add(e5)
    let sortedCalendar = testCalendar.futureEvents()
    expect(sortedCalendar[0].date).toBe("2019/10/10")
  })

  it('renders a div with 2 events', () => {
    let calendar = new Calendar
    calendar.add(e1)
    calendar.add(e2)
    expect(calendar.render().childElementCount).toBe(2)
  })

  it('returns upcoming events in chronological order', () => {
    // let e1 = {date: "2019/04/19"}
    // let e2 = {date: "2020/04/19"}
    // let e3 = {date: "2019/06/23"}
    // let e4 = {date: "2019/02/01"}
    let calendar = new Calendar;
    calendar.add(e1);
    calendar.add(e2);
    calendar.add(e3);
    calendar.add(e4);
    let sortedCalendar = calendar.sortUpcoming();
    expect(sortedCalendar[0]).toBe(e4)
    expect(sortedCalendar[1]).toBe(e1)
    expect(sortedCalendar[2]).toBe(e2)
    expect(sortedCalendar[3]).toBe(e3)
  })
})
