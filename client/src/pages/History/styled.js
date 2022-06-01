import styled from 'styled-components'

export const ContainerHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 100%;
  min-width: 360px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 20px;
`

export const SectionProject = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HistoryImg = styled.img`
  width: 78%;
  height: auto;
  clip-path: polygon(
    5% 5%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  box-shadow: 8px 8px 15px ${(props) => props.theme.colors.blackopacity};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 750px) {
    width: 88%;
  }
`

export const ProjectTitle = styled.h1`
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gold};
  line-height: 28px;
  text-align: center;
  margin: 20px 0;

  @media (max-width: 750px) {
    font-size: 26px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
  }
`

export const ProjectText = styled.p`
  position: relative;
  width: 80%;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;

  padding: 30px 50px;
  color: ${(props) => props.theme.colors.primary2};
  border: 3px solid ${(props) => props.theme.colors.gold};
  border-radius: 25px;
  box-shadow: 4px 6px 15px 0 ${(props) => props.theme.colors.blackopacity};

  span {
    font-weight: 600;
  }

  @media (max-width: 750px) {
    width: 90%;
    padding: 20px 30px;
    line-height: 28px;
  }
  @media (max-width: 550px) {
    padding: 15px 20px;
    font-size: 16px;
    line-height: 24px;
  }
`
