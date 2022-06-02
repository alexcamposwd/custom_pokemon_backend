/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import * as POSTPokenew from '../requests/POSTPokenew.request'

describe('POST Pokenew', () => {
  it('New Pokémon for testing included', () => {
    POSTPokenew.addPokenew().should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(response.body.newPoke.name).to.eq('Mega Rampardos Test frontend')
    })
  })
})