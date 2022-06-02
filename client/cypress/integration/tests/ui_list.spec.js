/* eslint-disable no-undef */
describe('List screen usability test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/initial')
  })

  it('Check List screen elements', () => {
    cy.get('[data-cy="title-listpokes"]').should('be.visible')
    cy.get('[data-cy="search-listpokes"]').should('be.visible')
    cy.get('[data-cy="lbl-limit"]').should('be.visible')
    cy.get('[data-cy="limit"]').should('be.visible')
    cy.get('[href="/info/metapod"]').should('be.visible')
    cy.get('[data-cy="wrapper-pagination"]').should('be.visible')
  })
})
