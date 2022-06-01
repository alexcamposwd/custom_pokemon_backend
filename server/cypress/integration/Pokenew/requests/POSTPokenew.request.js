// verbo/metodo - endpoint 
/// <reference types="cypress" />

const payloadAddPokenew = require('../payloads/add-Pokenew.json')

function addPokenew() {

  return cy.request({
    method: 'POST',
    url: '/new',
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    body: payloadAddPokenew
  })
}

export { addPokenew }