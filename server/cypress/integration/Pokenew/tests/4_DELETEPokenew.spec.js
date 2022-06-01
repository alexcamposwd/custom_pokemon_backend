import * as DELPokenew from '../requests/DELPokenew.request'
import * as POSTPokenew from '../requests/POSTPokenew.request'
import * as GETPokenew from '../requests/GETPokenew.request'

describe('DELETE Pokenew', () => {

  // it('Delete Pokémon', () => {
  //   GETPokenew.allPokenew().then((resAllPokenew) => {
  //     const lastId = resAllPokenew.body.length - 1
  //     DELPokenew.delPokenew(resAllPokenew.body[lastId]._id).should((resDeletePokenew) => {
  //       expect(resDeletePokenew.status).to.eq(200)
  //     })
  //   })
  // })

  it('Create and Delete Pokémon', () => {
    POSTPokenew.addPokenew().then((resAddPokenew) => {
      DELPokenew.delPokenew(resAddPokenew.body.newPoke._id).should((resDelPokenew) => {
        expect(resDelPokenew.status).to.eq(200)
      })
    })
  })

})