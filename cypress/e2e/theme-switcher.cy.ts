describe('theme switcher', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/en')
    cy.get('html').should('have.attr', 'style', 'color-scheme: dark;')
    cy.get('[data-cy="theme-switcher"]').wait(50).type('{enter}').click()
    cy.wait(50).get('html').should('have.attr', 'style', 'color-scheme: light;')
  })
})
