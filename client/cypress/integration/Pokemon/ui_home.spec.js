/* eslint-disable no-undef */
describe('Usabilidade da tela inicial', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Verificar elemetos da tela Home', () => {
    cy.get('[data-cy="img-home"]').should('be.visible').and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    });
  })

})
