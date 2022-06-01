import styled from 'styled-components'

export const ContainerList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-width: 360px;
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
  min-height: 74vh;
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
