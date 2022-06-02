/* eslint-disable no-undef */
describe('Testing routes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Click menu list', () => {
    cy.get('[data-cy="menu-list"]').click()
    cy.get('[data-cy="title-listpokes"]').should('contain', 'Search a Pokémon')
    cy.get('[href="/info/metapod"]').click()
    cy.get('[data-cy="title-info"]').should('contain', 'metapod')
    cy.get('[data-cy="btn-back-info"]').click()
    cy.get('[data-cy="title-listpokes"]').should('contain', 'Search a Pokémon')
  })

  it('Click menu create', () => {
    cy.get('[data-cy="menu-create"]').click()
    cy.get('[data-cy="msgwel-pokenewlist"]').should('contain', 'Be welcome!')
    cy.get('[data-cy="btn-create-pokenewlist"]').should('have.length', 1).click()
    cy.get('[data-cy="wapper-pokenew"]').should('be.visible')
    cy.get('[data-cy="btn-save-pokenew"]').should('be.visible')
    cy.get('[data-cy="btn-back-pokenew"]').click()
    cy.get('[data-cy="msgwel-pokenewlist"]').should('contain', 'Be welcome!')
    cy.get('[data-cy="card-newpoke"]:nth-last-child(1)').click()
    cy.get('[data-cy="title-pokeinfo"]').should('contain', 'Mega Rampardos')
    cy.get('[data-cy="btn-update-pokeinfo"]').click()
    cy.get('[data-cy="inp-name-pokeedit"]').should('be.visible')
    cy.get('[data-cy="btn-save-pokeedit"]').should('be.visible')
    cy.get('[data-cy="btn-back-pokeedit"]').click()
    cy.get('[data-cy="title-pokeinfo"]').should('contain', 'Mega Rampardos')
    cy.get('[data-cy="btn-delete-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="btn-back-pokeinfo"]').click()
    cy.get('[data-cy="msgwel-pokenewlist"]').should('contain', 'Be welcome!')
  })

  it('Click menu history', () => {
    cy.get('[data-cy="menu-history"]').click()
    cy.get('[data-cy="title-history"]').should(
      'contain',
      'A História do Anime Pokémon'
    )
  })

  it('Click menu about', () => {
    cy.get('[data-cy="menu-about"]').click()
    cy.get('[data-cy="project-poke"]').should('be.visible')
    cy.get('[data-cy="git_autor"]').should('be.visible')
  })
})
