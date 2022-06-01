import styled from 'styled-components'

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`

export const Loader = styled.img`
  width: 70px;
`
