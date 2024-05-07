describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    // cy.visit('/fundamentals')
    // cy.get('[data-test="fundamentals headers"]').contains(/Testing Fundamentals/i)
    cy.getDataTest('fundamentals headers').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals headers"]').should('contain.text', 'Testing Fundamentals' )
  })

  it('Accordium works correctly', () => {
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordium-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordium-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})