import React from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/images/back_pokemon.jpeg'
import * as S from './styled'

function Home() {
  return (
    <S.ContainerHome>
      <NavLink to='/initial'>
        <S.HomeImg data-cy='img-home' src={background} alt='Pokémon' />
      </NavLink>
    </S.ContainerHome>
  )
}

export default Home
