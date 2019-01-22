describe('Event', () => {
  it('displays a user event with: description and date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019")
    expect(event.description).toBe("JAG's BBQ: Fun for everyone")
    expect(event.date).toBe("10/10/2019")
  })
})
