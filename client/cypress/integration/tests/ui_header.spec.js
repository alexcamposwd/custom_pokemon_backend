/* eslint-disable no-undef */
describe('Inicial screen usability test', () => {
  
  it('Check Home screen Header elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check Initial screen Header elements', () => {
    cy.visit('http://localhost:3000/initial')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check New List screen Header elements', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check History screen Header elements', () => {
    cy.visit('http://localhost:3000/history')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check About screen Header elements', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check New Info screen Header elements', () => {
    cy.visit('http://localhost:3000/pokenew/629604c157d58865a2493a1e')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check New Edit screen Header elements', () => {
    cy.visit('http://localhost:3000/edit/629604c157d58865a2493a1e')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })

  it('Check New screen Header elements', () => {
    cy.visit('http://localhost:3000/new')
    cy.get('[data-cy="nav-title"]').should('be.visible')
    cy.get('[data-cy="nav-logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-cy="menu-list"]').should('be.visible')
    cy.get('[data-cy="menu-create"]').should('be.visible')
    cy.get('[data-cy="menu-history"]').should('be.visible')
    cy.get('[data-cy="menu-about"]').should('be.visible')
  })
})
