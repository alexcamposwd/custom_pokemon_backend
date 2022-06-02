/* eslint-disable no-undef */
// verbo/metodo - endpoint 
/// <reference types="cypress" />

const urlGet = 'http://localhost:5000/api/v1/all'

function allPokenew() {

  return cy.request({
    method: 'GET',
    url: urlGet,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { allPokenew }