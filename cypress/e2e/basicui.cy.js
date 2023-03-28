describe('testing website elements',  { browser: '!firefox' }, () => {
  beforeEach(() => {

    cy.log('Navigating to the home page before each test')
    cy.visit('https://demoqa.com')
  }) 
  
  it('demo qa home load', () => {
      cy.title().should('include', 'DEMOQA')
    })

    it('navigate to elements page', () => {
      cy.get('.card-body:first').click()
      cy.url().should('include', '/elements')
    })

  })