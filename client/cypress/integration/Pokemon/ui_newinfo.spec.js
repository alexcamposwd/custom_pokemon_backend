/* eslint-disable no-undef */
describe('Usabilidade da tela New Pokémon info', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/pokenew/629604c157d58865a2493a1e')
  })

  it('Verificar elementos da tela New Info', () => {
    cy.get('[data-cy="title-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="img-pokeinfo"]').should('be.visible').and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    });
    cy.get('[data-cy="types-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="img-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="types-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="lbl-stats-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="progress-newpoke"]').should('be.visible');
    cy.get('[data-cy="stats-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="title-abilities-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="title-ability-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="descr-abilities-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="btn-update-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="btn-delete-pokeinfo"]').should('be.visible');
    cy.get('[data-cy="btn-back-pokeinfo"]').should('be.visible');
  })

})