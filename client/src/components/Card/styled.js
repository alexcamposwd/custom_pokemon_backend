import styled from 'styled-components'

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 280px;
  margin: auto;
  border-radius: 7px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
  border: 2px solid ${(props) => props.theme.colors.gold};
  box-shadow: 4px 6px 15px 0 ${(props) => props.theme.colors.blackopacity};
  cursor: pointer;

  &:after {
    content: '';
    display: flex;
    flex-wrap: wrap;
    width: 94%;
    height: 94%;
    border: 3px solid ${(props) => props.theme.colors.gold};
    border-radius: 5px;
    position: absolute;
    top: 3%;
    left: 3%;
    background: none;
  }

  &:hover {
    transform: scale(1.03);
  }
`
export const CardImg = styled.img`
  position: absolute;
  width: 120px;
  height: 140px;
  top: 40px;
`

export const CardTitle = styled.h3`
  position: absolute;
  font-size: 22px;
  color: ${(props) => props.theme.colors.gold};
  bottom: 20px;
`
