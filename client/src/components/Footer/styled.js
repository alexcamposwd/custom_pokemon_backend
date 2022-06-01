import { FaChevronCircleUp } from 'react-icons/fa'
import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.white};
  color: var(--clr-grey-1);
  font-size: 14px;
  text-align: center;
  min-width: 360px;
`

export const CopyRight = styled.p`
  span {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    color: ${(props) => props.theme.colors.redmd};
    padding: 10px;
  }
`

export const CustomStyleIcon = css`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.theme.colors.gold};

  &:hover {
    transform: scale(1.1);
  }
`

export const CustomIconUp = styled(FaChevronCircleUp)`
  ${CustomStyleIcon}
`
