describe('Event', () => {
  let event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00", "London")
  it('should store a description', () => {
    expect(event.description).toBe("JAG's BBQ: Fun for everyone")
  });

  it('should store a date', () => {
    expect(event.date).toBe("10/10/2019")
  });

  it('should store a time', () => {
    expect(event.time).toBe("08:00")
  });

  it('should store a city', () => {
    expect(event.city).toBe("London")
  });
});
