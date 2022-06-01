import styled from 'styled-components'

export const ContainerHome = styled.section`
  display: flex;
  width: 100vw;
  height: 85vh;
  min-width: 360px;
  min-height: 84vh;
  padding: 0 100px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    padding: 0 50px;
  }

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    padding: 0;
  }
`

export const HomeImg = styled.img`
  width: 100%;
  min-width: 1000px;
  height: 85vh;
  max-height: 900px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
`
