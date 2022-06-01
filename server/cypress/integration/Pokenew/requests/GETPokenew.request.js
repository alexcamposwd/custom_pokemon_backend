// verbo/metodo - endpoint 
/// <reference types="cypress" />

function allPokenew() {

  return cy.request({
    method: 'GET',
    url: '/all',
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { allPokenew }