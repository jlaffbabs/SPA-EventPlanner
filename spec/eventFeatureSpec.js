describe('Event', () => {
  it('stores a user event with: description, time and date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    expect(event.description).toBe("JAG's BBQ: Fun for everyone")
    expect(event.date).toBe("10/10/2019")
    expect(event.time).toBe("08:00")
  })
})
