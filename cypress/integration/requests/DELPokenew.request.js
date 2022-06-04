// verbo/metodo - endpoint 
/// <reference types="cypress" />

function delPokenew(id) {
  return cy.request({
    method: 'DELETE',
    url: `/pokedel/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}

export { delPokenew }