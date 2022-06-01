/* eslint-disable no-undef */
describe('Usabilidade da tela inicial', () => {
  it('Verificar elemetos Footer da tela na home', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela Initial', () => {
    cy.visit('http://localhost:3000/initial')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela New List', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela History', () => {
    cy.visit('http://localhost:3000/history')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela About', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela New Info', () => {
    cy.visit('http://localhost:3000/pokenew/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela New Edit', () => {
    cy.visit('http://localhost:3000/edit/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Verificar elemetos Footer da tela New', () => {
    cy.visit('http://localhost:3000/new')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })
})
