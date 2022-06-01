import * as GETPokenew from '../requests/GETPokenew.request'
import * as DELPokenew from '../requests/DELPokenew.request'

describe('GET Pokenew', () => {
  const id = ''
  it('List all new Pokémons', () => {
    GETPokenew.allPokenew().should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      cy.log(response.body)
    })
  })
  it('Delete Pokémon - Clear database', () => {
    GETPokenew.allPokenew().then((resAllPokenew) => {
      const lastId = resAllPokenew.body.length - 1
      DELPokenew.delPokenew(resAllPokenew.body[lastId]._id).should((resDeletePokenew) => {
        expect(resDeletePokenew.status).to.eq(200)
      })
    })
  })
  
})