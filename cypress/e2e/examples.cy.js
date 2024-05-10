describe("Examples test", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("Multi page testing", () => {
    cy.contains(/Examples/i);

    cy.getDataTest("nav-why-cypress").click(); 
    cy.location("pathname").should("eq", "/"); 

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("eq", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("eq", "/fundamentals");

    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("eq", "/forms");

    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("eq", "/examples");

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("eq", "/component");

    cy.getDataTest("nav-best-practices").click();
    cy.location("pathname").should("eq", "/best-practices");
  });

  it.only('intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      body: {
      message: 'successfully intercepted POST request'
      }
    });

    cy.getDataTest('post-button').click()
  })
 
});
