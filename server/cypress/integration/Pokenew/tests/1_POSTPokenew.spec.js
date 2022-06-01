import * as POSTPokenew from '../requests/POSTPokenew.request'

describe('POST Pokenew', () => {

  it('Create new Pokémon', () => {
    POSTPokenew.addPokenew().should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.newPoke.name).to.eq('Mega Rampardos Test')
    })
  })

})