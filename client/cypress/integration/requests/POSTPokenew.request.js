/* eslint-disable no-undef */
// verbo/metodo - endpoint 
/// <reference types="cypress" />

const payloadAddPokenew = require('../payloads/add-Pokenew.json')

const urlPost = 'http://localhost:5000/api/v1/new'

function addPokenew() {

  return cy.request({
    method: 'POST',
    url: urlPost,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    body: payloadAddPokenew
  })
}

export { addPokenew }