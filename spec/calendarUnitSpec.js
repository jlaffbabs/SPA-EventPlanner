describe('Calendar', () => {
  it('saves a user event', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0]).toBe(event)
  })
  //   it('saves a user event description', () => {
  //   const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
  //   const calendar = new Calendar
  //   calendar.add(event)
  //   expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  // })
  //   it('saves a user event time', () => {
  //   const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
  //   const calendar = new Calendar
  //   calendar.add(event)
  //   expect(calendar.events[0].time).toBe("08:00")
  // })
  //   it('saves a user event date', () => {
  //   const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
  //   const calendar = new Calendar
  //   calendar.add(event)
  //   expect(calendar.events[0].date).toBe("10/10/2019")
  // })
})