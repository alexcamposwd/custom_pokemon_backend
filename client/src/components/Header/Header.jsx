import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_pokemon.png'
import * as S from './styled'

function Header() {
  return (
    <S.HeaderWrapper>
      <NavLink to='/'>
        <S.NavTitle data-cy='nav-title'>Pokedex</S.NavTitle>
      </NavLink>
      <NavLink to='/'>
        <S.NavLogo data-cy='nav-logo' src={logo} alt='Logo Provu' />
      </NavLink>

      <S.NavList>
        <S.NavItem>
          <NavLink data-cy='menu-list' to='/initial'>
            List
          </NavLink>
        </S.NavItem>
        <S.NavItem>
          <NavLink data-cy='menu-create' to='/list'>
            Create
          </NavLink>
        </S.NavItem>
        <S.NavItem>
          <NavLink data-cy='menu-history' to='/history'>
            History
          </NavLink>
        </S.NavItem>
        <S.NavItem>
          <NavLink data-cy='menu-about' to='/about'>
            About
          </NavLink>
        </S.NavItem>
      </S.NavList>
    </S.HeaderWrapper>
  )
}

export default Header
