describe('Calendar', () => {
  it('displays a user event with: description, time and date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
    expect(calendar.events[0].date).toBe("10/10/2019")
    expect(calendar.events[0].time).toBe("08:00")
  })
})
