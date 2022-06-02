/* eslint-disable no-undef */
describe('About screen usability test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('Check About Screen Elements', () => {
    cy.get('[data-cy="project-poke"]').should('be.visible')
    cy.get('[data-cy="autor-poke"]').should('be.visible')
  })
})
