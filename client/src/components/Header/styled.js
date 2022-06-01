import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  min-width: 360px;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  a {
    width: 33%;
    text-align: center;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;

    a {
      width: 30%;
      text-align: center;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};

    a {
      width: 100%;
      text-align: center;
    }
  }
`

export const NavTitle = styled.h2`
  width: 33%;
  font-size: 24px;
  letter-spacing: 8px;
  margin-left: 50px;
  color: ${(props) => props.theme.colors.primary2};

  @media (max-width: 1200px) {
    width: 170px;
    font-size: 23px;
    margin-left: 40px;
  }
  @media (max-width: 750px) {
    width: 140px;
    font-size: 22px;
    letter-spacing: 6px;
    margin-left: 30px;
  }
  @media (max-width: 550px) {
    width: 100%;
    font-size: 20px;
    padding-top: 25px;
    margin: auto;
  }
`
export const NavLogo = styled.img`
  width: 180px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 160px;
  }
  @media (max-width: 750px) {
    width: 130px;
  }
  @media (max-width: 550px) {
    width: 150px;
  }
`

export const NavList = styled.ul`
  display: flex;
  width: 34%;
  justify-content: center;
  align-self: center;
  margin-right: 30px;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 240px;
  }
  @media (max-width: 750px) {
    flex-direction: row;
    width: 90%;
    margin-right: none;
    justify-content: space-around;
  }
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-right: none;
  }
`

export const NavItem = styled.li`
  display: flex;
  width: auto;
  list-style: none;
  text-transform: uppercase;
  justify-content: flex-end;
  gap: 10px;

  a {
    width: 100px;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 3px;
    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.colors.primary2};
  }

  @media (max-width: 1200px) {
    width: 120px;
    font-size: 16px;
  }
  @media (max-width: 750px) {
    width: 80px;
    a {
      font-size: 15px;
    }
  }
  @media (max-width: 550px) {
    width: 33%;
    justify-content: center;
    a {
      font-size: 14px;
    }
  }
`
