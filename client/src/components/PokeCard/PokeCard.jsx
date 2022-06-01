import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

import * as S from './styled'

function Card({ poke }) {
  const navigate = useNavigate()

  if (!poke) {
    return <Loading />
  }
  return (
    <S.ContainerCard data-cy='card-newpoke' onClick={() => navigate(`/pokenew/${poke._id}`)}>
      <S.CardImg data-cy='img-newpoke' src={poke.url} alt={poke.name} />
      <S.CardTitle data-cy='title-newpoke'>{poke.name}</S.CardTitle>
    </S.ContainerCard>
  )
}

export default Card
