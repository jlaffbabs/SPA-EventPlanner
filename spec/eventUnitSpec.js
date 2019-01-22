describe('Event', () => {
  it('should store a description', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "")
    expect(event.description()).toBe("JAG's BBQ: Fun for everyone")
  })
})