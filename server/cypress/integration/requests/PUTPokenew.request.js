// verbo/metodo - endpoint 
/// <reference types="cypress" />

const payloadEditPokenew = require('../payloads/edit-Pokenew.json')

function updatePokenew(id) {
  return cy.request({
    method: 'PUT',
    url: `/pokeedit/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    body: payloadEditPokenew
  })
}

export { updatePokenew }