import * as POSTPokenew from '../requests/POSTPokenew.request'
import * as GETPokenew from '../requests/GETPokenew.request'
import * as PUTPokenew from '../requests/PUTPokenew.request'
import * as DELPokenew from '../requests/DELPokenew.request'

describe('POST Pokenew', () => {
  let idNew = ''
  it('Create new Pokémon', () => {
    POSTPokenew.addPokenew().should((response) => {
      idNew = response.body.newPoke._id
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(response.body.newPoke.name).to.eq('Mega Rampardos Test backend')
    })
  })

  it('List all new Pokémons', () => {
    GETPokenew.allPokenew().should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
    })
  })

  it('Create and change Pokémon', () => {
    PUTPokenew.updatePokenew(idNew).should((resUpdate) => {
      expect(resUpdate.status).to.eq(200)
      expect(resUpdate.body).to.be.not.null
      expect(JSON.stringify(resUpdate.body)).to.eq('{"message":"Pokémon updated successfully!"}')
    })
  })

  it('Create and Delete Pokémon', () => {
    DELPokenew.delPokenew(idNew).should((resDelete) => {
      expect(resDelete.status).to.eq(200)
      expect(resDelete.body).to.be.not.null
      expect(JSON.stringify(resDelete.body)).to.eq('{"message":"Pokémon successfully deleted!"}')
    })
  })

})