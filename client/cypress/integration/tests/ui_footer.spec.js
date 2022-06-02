/* eslint-disable no-undef */
describe('Initial screen usability test', () => {
  it('Verificar elemetos Footer da tela na home', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check Initial Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/initial')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New List Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check History Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/history')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check About Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Info Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/pokenew/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Edit Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/edit/629604c157d58865a2493a1e')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })

  it('Check New Screen Footer Elements', () => {
    cy.visit('http://localhost:3000/new')
    cy.get('[data-cy="copyright"]').should('be.visible')
  })
})
