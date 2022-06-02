/* eslint-disable no-undef */
describe('New List screen usability test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/list')
  })

  it('Check New List screen elements', () => {
    cy.get('[data-cy="msgwel-pokenewlist"]').should('be.visible')
    cy.get('[data-cy="msgclick-pokenewlist"]').should('be.visible')
    cy.get('[data-cy="btn-create-pokenewlist"]').should('be.visible')
    cy.get('[data-cy="title-pokenewlist"]').should('be.visible')
    cy.get('[data-cy="card-newpoke"]').should('be.visible')
  })
})
