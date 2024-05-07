describe('Fundamentals test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('[data-test="fundamentals headers"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals headers"]').should('contain.text', 'Testing Fundamentals' )
  })
})