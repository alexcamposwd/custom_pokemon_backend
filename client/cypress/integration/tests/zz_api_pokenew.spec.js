/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import * as GETPokenew from '../requests/GETPokenew.request'
import * as DELPokenew from '../requests/DELPokenew.request'

describe('POST Pokenew', () => {

  it('Clear database', () => {
    GETPokenew.allPokenew().should((response) => {
      const index = response.body.length -1
      const idNew = response.body[index]._id
      DELPokenew.delPokenew(idNew).should((resDelete) => {
        expect(resDelete.status).to.eq(200)
        expect(resDelete.body).to.be.not.null
        expect(JSON.stringify(resDelete.body)).to.eq('{"message":"Pokémon successfully deleted!"}')
      })
    })
  })

})