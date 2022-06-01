/* eslint-disable no-undef */
describe('Usabilidade da tela history', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/history')
  })

  it('Verificar elementos da tela History', () => {
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
