import styled from 'styled-components'

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 130px;
  margin-left: 20px;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: row;
    min-width: 120px;
    margin-left: 0px;
    padding: 10px;
  }
`

export const SelectText = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary2};
  margin-bottom: 5px;

  @media (max-width: 550px) {
    width: 50%;
    margin-bottom: 0px;
    margin: auto;
  }
`

export const SelectControl = styled.select`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary2};
  padding: 5px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.light};

  @media (max-width: 550px) {
    width: 50%;
  }
`
