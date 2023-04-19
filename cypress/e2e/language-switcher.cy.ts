describe('language switcher', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/en')
    cy.get('[data-cy="logo-description"]').should('contain', 'AuthApp')
    cy.get('[data-cy="switch-language-trigger"]').wait(50).click()
    cy.contains('Português').click({ force: true })
    cy.url().should('include', '/pt')
    cy.get('[data-cy="logo-description"]').should('contain', 'AplicativoDeAutenticação')
  })
})
