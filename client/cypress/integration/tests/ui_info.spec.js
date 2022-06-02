/* eslint-disable no-undef */
describe('Info screen usability test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/info/metapod')
  })

  it('Check Info screen elements', () => {
    cy.get('[data-cy="title-info"]').should('be.visible')
    cy.get('[data-cy="img-info"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="types-info"]').should('be.visible')
    cy.get('[data-cy="stats-name-info"]').should('be.visible')
    cy.get('[data-cy="stats-progress-info"]').should('be.visible')
    cy.get('[data-cy="stats-num-info"]').should('be.visible')
    cy.get('[data-cy="abilities-title-info"]').should('be.visible')
    cy.get('[data-cy="btn-back-info"]').should('be.visible')
  })
})
