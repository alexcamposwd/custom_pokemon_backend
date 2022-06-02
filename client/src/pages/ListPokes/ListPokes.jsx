import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import * as S from './styled'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import SelectLimits from '../../components/SelectLimits'
import Pagination from '../../components/Pagination'

function ListPokes() {
  const [pokes, setPokes] = useState([])
  const [pokeName, setPokeName] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [limitation, setLimitation] = useState(200)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const limit = [
    { id: 2, name: 20 },
    { id: 3, name: 50 },
    { id: 4, name: 100 },
    { id: 5, name: 200 },
    { id: 6, name: 500 },
    { id: 7, name: 800 },
    { id: 8, name: 1000 },
    { id: 9, name: 1126 },
  ]

  const filteredPokes =
    searchInput === ''
      ? pokes
      : pokes.filter((poke) => poke.name.includes(searchInput))

  // Pagination
  const pages = Math.ceil(filteredPokes.length / Number(itemsPerPage))
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredPokes.slice(startIndex, endIndex)

  useEffect(() => {
    api
      .get(`/pokemon?limit=${limitation}`)
      .then((res) => {
        setPokes(res.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [itemsPerPage, pokeName, limitation])

  const handleChange = (event) => {
    setPokeName(event.target.textContent)
  }

  const handleSearch = (event) => {
    const data = event.target.value
    const search = data.toLowerCase()
    setSearchInput(search)
  }

  const handleLimit = (event) => {
    const selectedLimit = event.target.options[event.target.selectedIndex].text
    setLimitation(selectedLimit)
  }

  return (
    <S.ContainerList>
      <S.ListTitle data-cy='title-listpokes'>Search a Pokémon</S.ListTitle>
      <S.ContainerSearch>
        <S.InputSearch
          type='text'
          name='search'
          placeholder='Enter the Pokemon name'
          onChange={(event) => handleSearch(event)}
          data-cy='search-listpokes'
        />
        <SelectLimits
          name='limit'
          text='Cards Limits'
          options={limit}
          handleOnChange={handleLimit}
          data-cy='limit-listpokes'
        />
      </S.ContainerSearch>
      <S.ListCards>
        {currentItems.length > 0 &&
          currentItems.map((pokemon) => (
            <Card
              key={pokemon.url}
              name={pokemon.name}
              handleChange={handleChange}
              data-cy='card-listpokes'
            />
          ))}
        {loading && <Loading />}
        {!loading && pokes.length === 0 && (
          <S.WarnMsg data-cy='warnMsg-listpokes'>
            There are no pokemons to show.
          </S.WarnMsg>
        )}
      </S.ListCards>

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </S.ContainerList>
  )
}

export default ListPokes
