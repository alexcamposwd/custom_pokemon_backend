/* eslint-disable no-undef */

import * as GETPokenew from '../requests/GETPokenew.request.js'

describe('New Info screen usability test', () => {

  it('Create and Delete Pokémon', () => {
    GETPokenew.allPokenew().should((response) => {
      const index = response.body.length -1
      const idNew = response.body[index]._id
      cy.visit(`http://localhost:3000/pokenew/${idNew}`)
    })
  })


  it('Check New Info screen elements', () => {
    cy.get('[data-cy="title-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="img-pokeinfo"]')
      .should('be.visible')
      .and(($img) => {expect($img[0].naturalWidth).to.be.greaterThan(0)})
    cy.get('[data-cy="types-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="img-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="types-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="lbl-stats-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="progress-newpoke"]').should('be.visible')
    cy.get('[data-cy="stats-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="title-abilities-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="title-ability-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="descr-abilities-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="btn-update-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="btn-delete-pokeinfo"]').should('be.visible')
    cy.get('[data-cy="btn-back-pokeinfo"]').should('be.visible')
  })
})
