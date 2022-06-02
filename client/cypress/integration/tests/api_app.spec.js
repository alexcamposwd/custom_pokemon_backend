/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

describe('API Testing Pokeapi.co', () => {  

  const UrlPokeapi = "https:/pokeapi.co/api/v2/pokemon/1"

  beforeEach(() => {
    cy.request(UrlPokeapi).as('bulbasaur');
  });

  it('check connection and request', () => {
    cy.get('@bulbasaur')
      .its('body')
      .should('include', { name: 'bulbasaur' })
      .should('not.include', { name: 'pikachu' });
  });
});

describe('API Testing Pokenew api', () => {  

  const UrlPokenew = "http://localhost:5000/api/v1/all"

  beforeEach(() => {
    cy.request(UrlPokenew).as('pokenew');
  });

  it('check connection and request', () => {
    cy.get('@pokenew').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(JSON.stringify(response.body[0].name)).to.eq('"Mega Rampardos"')
    })
  });
});