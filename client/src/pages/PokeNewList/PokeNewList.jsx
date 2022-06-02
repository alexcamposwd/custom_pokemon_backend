/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePoke } from '../../contexts/PokenewContext'
import * as S from './styled'
import Loading from '../../components/Loading'
import PokeCard from '../../components/PokeCard'

function PokeNewList() {
  const { getPokes, loading } = usePoke()
  const [newPokes, setNewPokes] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await getPokes()
      setNewPokes(data)
    })()
  }, [getPokes])

  if (newPokes.length === 0) {
    return (
      <S.MsgWelcome>
        <h1 data-cy='msgwel-pokenewlist'>Be welcome!</h1>
        <h2>
          Have you ever imagined being able to create your own &nbsp;
          <span>Pokémon ?</span>
        </h2>
        <h3>Now you can !!!</h3>
        <p data-cy='msgclick-pokenewlist'>click below and have fun!</p>
        <S.FildBtn>
          <Link to='/new'>
            <S.Button data-cy='btn-create-pokenewlist' type='button'>
              Create New Pokémon
            </S.Button>
          </Link>
        </S.FildBtn>
      </S.MsgWelcome>
    )
  }

  return (
    <S.ContainerList>
      <S.MsgInitial>
        <h1 data-cy='msgwel-pokenewlist'>Be welcome!</h1>

        <p data-cy='msgclick-pokenewlist'>click below and have fun!</p>
        <S.FildBtn>
          <Link to='/new' data-cy='btn-create-pokenewlist'>
            <S.Button type='button'>Create New Pokémon</S.Button>
          </Link>
        </S.FildBtn>
      </S.MsgInitial>
      <S.ListCards>
        <S.ListTitle data-cy='title-pokenewlist'>
          List Custom Pokémons
        </S.ListTitle>
        {!loading && <Loading />}
        {newPokes &&
          newPokes?.map((poke, index) => (
            <PokeCard data-cy='card-pokenewlist' key={index} poke={poke} />
          ))}
      </S.ListCards>
    </S.ContainerList>
  )
}

export default PokeNewList
