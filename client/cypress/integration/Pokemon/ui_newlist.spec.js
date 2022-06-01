/* eslint-disable no-undef */
describe('Usabilidade da tela list', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/list')
  })

  it('Verificar elementos da tela New List', () => {
    cy.get('[data-cy="msgwel-pokenewlist"]').should('be.visible');
    cy.get('[data-cy="msgclick-pokenewlist"]').should('be.visible');
    cy.get('[data-cy="btn-create-pokenewlist"]').should('be.visible');
    cy.get('[data-cy="title-pokenewlist"]').should('be.visible');
    cy.get('[data-cy="card-newpoke"]').should('be.visible');
  })

})