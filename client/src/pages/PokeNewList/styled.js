import styled from 'styled-components'

export const MsgWelcome = styled.div`
  width: 100%;
  height: 85vh;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 30px 30px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.redmd};
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin: 20px 40px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};

    span {
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      color: ${(props) => props.theme.colors.redmd};
    }
  }

  h3 {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.gold};
  }

  p {
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    margin: 10px 0;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 24px;
      margin: 20px 20px;
    }

    h2 {
      font-size: 17px;
      margin: 15px 40px;

      span {
        font-size: 18px;
      }
    }

    h3 {
      font-size: 20px;
      margin: 10px;
    }

    p {
      font-size: 15px;
      margin: 10px 0;
    }
  }
`

export const MsgInitial = styled.div`
  width: 100%;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 30px 30px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.redmd};
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin: 20px 40px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};

    span {
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      color: ${(props) => props.theme.colors.redmd};
    }
  }

  h3 {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.gold};
  }

  p {
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    margin: 10px 0;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary3};
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 24px;
      margin: 20px 20px;
    }

    h2 {
      font-size: 17px;
      margin: 15px 40px;

      span {
        font-size: 18px;
      }
    }

    h3 {
      font-size: 20px;
      margin: 10px;
    }

    p {
      font-size: 15px;
      margin: 10px 0;
    }
  }
`

export const ContainerList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-width: 360px;
  min-height: 85vh;
`

export const ListTitle = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary2};
  text-align: center;
  padding: 10px;

  @media (max-width: 1200px) {
    margin: 0;
  }
  @media (max-width: 550px) {
    font-size: 24px;
    padding: 20px;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  width: 100vw;
  min-width: 360px;
  padding: 0 50px;

  @media (max-width: 750px) {
    padding: 0 30px;
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`

export const InputSearch = styled.input`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.light};

  @media (max-width: 750px) {
    padding: 10px;
    font-size: 16px;
  }
`

export const ListCards = styled.div`
  display: flex;
  max-width: 1700px;
  min-height: 63vh;
  flex-wrap: wrap;
  padding: 20px 30px;
  justify-content: space-between;
  gap: 20px 10px;
  align-items: center;

  @media (max-width: 750px) {
    padding: 30px;
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
`

export const WarnMsg = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.reddark};
`

export const FildBtn = styled.div`
  position: relative;
  width: 20em;
  height: 40px;
  margin: 0 auto;
`

export const Button = styled.button`
  position: absolute;
  width: 20em;
  height: 40px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.colors.goldmd};
  background-color: ${(props) => props.theme.colors.gold};
  box-shadow: 5px 6px 8px ${(props) => props.theme.colors.blackopacity};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.015);
    font-weight: 600;
  }
`
