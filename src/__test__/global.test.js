const username = 'Cristian Arias'
test('It must contain a specific text', () => {
    expect(username).toMatch(/Arias/);
});