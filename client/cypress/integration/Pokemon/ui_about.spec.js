/* eslint-disable no-undef */
describe('Usabilidade da tela about', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('Verificar elementos da tela About', () => {
    cy.get('[data-cy="project-poke"]').should('be.visible')
    cy.get('[data-cy="autor-poke"]').should('be.visible')
  })
})
