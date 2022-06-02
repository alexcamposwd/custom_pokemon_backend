/* eslint-disable no-undef */
describe('History screen usability test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/history')
  })

  it('Check History screen elements', () => {
    cy.get('[data-cy="img-history"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="title-history"]').should('be.visible')
    cy.get('[data-cy="text-history"]').should('be.visible')
  })
})
