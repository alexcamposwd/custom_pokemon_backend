import * as PUTPokenew from '../requests/PUTPokenew.request'
import * as POSTPokenew from '../requests/POSTPokenew.request'
import * as DELPokenew from '../requests/DELPokenew.request'

describe('PUT Pokenew', () => {

  it('Create and change Pokémon', () => {
    POSTPokenew.addPokenew().then((resAddPokenew) => {
      const idNew = resAddPokenew.body.newPoke._id
      PUTPokenew.updatePokenew(idNew).should((resUpdatePokenew) => {
        expect(resUpdatePokenew.status).to.eq(200)
        expect(resUpdatePokenew.body).to.be.not.null
        expect(JSON.stringify(resUpdatePokenew.body)).to.eq('{"message":"Pokémon updated successfully!"}')
        DELPokenew.delPokenew(idNew).should((resDelPokenew) => {
          expect(resDelPokenew.status).to.eq(200)
        })
      })
    })
  })
})

