import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styled'

function Card({ name, handleChange }) {
  const urlName = `https://img.pokemondb.net/artwork/large/${name}.jpg`

  return (
    <Link to={`/info/${name}`}>
      <S.ContainerCard onClick={handleChange}>
        <S.CardImg data-cy='img-poke' src={urlName} alt={name} />
        <S.CardTitle data-cy='title-poke'>{name}</S.CardTitle>
      </S.ContainerCard>
    </Link>
  )
}

export default Card
