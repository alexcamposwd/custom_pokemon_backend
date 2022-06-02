/* eslint-disable no-undef */
// verbo/metodo - endpoint 
/// <reference types="cypress" />

const urlDel = `http://localhost:5000/api/v1/pokedel/`

function delPokenew(id) {
  return cy.request({
    method: 'DELETE',
    url: urlDel + id,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { delPokenew }