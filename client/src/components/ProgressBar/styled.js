import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  transform: rotate(180deg);

  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 750px) {
    width: 140px;
  }
`

export const CurrentProgress = styled.div`
  height: inherit;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.redmd} 0%,
    ${(props) => props.theme.colors.greendark} 100%
  );
  border-radius: inherit;
`
