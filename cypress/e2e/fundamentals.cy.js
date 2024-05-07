describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals headers"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals headers"]').should('contain.text', 'Testing Fundamentals' )
  })
})