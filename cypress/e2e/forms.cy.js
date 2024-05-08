describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    
    it('Contains correct header text', () => {
        cy.contains(/Testing Forms/i)
    })
    it('Forms work correctly', () => {
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input') // alias is created
        // cy.getDataTest('subscribe-form').find('input').type('sumanjeet0012@gmail.com')
        cy.get('@subscribe-input').type('sumanjeet0012@gmail.com') // alias is used
        cy.contains(/Successfully subbed: sumanjeet0012@gmail.com/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: sumanjeet0012@gmail.com/i).should('exist')

        cy.wait(3000)
        cy.contains(/Successfully subbed: sumanjeet0012@gmail.com/i).should('not.exist')

        cy.get('@subscribe-input').type('sumanjeet0012@gmail.io')
        cy.contains(/Invalid email: sumanjeet0012@gmail.io/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: sumanjeet0012@gmail.io/i).should('exist')

        cy.wait(3000)
        cy.contains(/Invalid email: sumanjeet0012@gmail.io/i).should('not.exist')

        cy.contains(/fails/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail/i).should('exist')

        
    })
})