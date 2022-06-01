/* eslint-disable no-undef */
describe('Usabilidade da tela list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/initial')
  })

  it('Verificar elementos da tela List', () => {
    cy.get('[data-cy="title-listpokes"]').should('be.visible')
    cy.get('[data-cy="search-listpokes"]').should('be.visible')
    cy.get('[data-cy="lbl-limit"]').should('be.visible')
    cy.get('[data-cy="limit"]').should('be.visible')
    cy.get('[href="/info/metapod"]').should('be.visible')
    cy.get('[data-cy="wrapper-pagination"]').should('be.visible')
  })
})
