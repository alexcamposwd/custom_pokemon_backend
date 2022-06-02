import styled from 'styled-components'

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 20px;
`

export const SectionProject = styled.section`
  width: 80%;
  margin-top: 30px;
  padding: 20px 50px;
  color: ${(props) => props.theme.colors.primary2};
  border: 3px solid ${(props) => props.theme.colors.gold};
  border-radius: 25px;
  box-shadow: 4px 6px 15px 0 ${(props) => props.theme.colors.blackopacity};

  @media (max-width: 750px) {
    width: 90%;
    margin-top: 10px;
    padding: 20px 30px;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-top: 10px;
    padding: 15px 20px;
  }
`
export const ProjectTitle = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gold};
  line-height: 28px;
  text-align: center;

  a {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gold};
    line-height: 28px;
    text-decoration: none;
    margin-left: 10px;

    &:hover {
      font-size: 20px;
      font-weight: 600;
    }

    @media (max-width: 750px) {
      font-size: 18px;
      line-height: 25px;
    }
    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      line-height: 22px;
    }
  }
`

export const ProjectSubTitle = styled.h3`
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gold};
  margin: 15px 0 7px 0;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ProjectText = styled.ul`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary2};
  margin: 10px 0;

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 22px;
  }
`

export const DevInfo = styled.div``

export const DevStacks = styled.ul`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary2};

  li {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.colors.primary2};

    p {
      display: flex;
      font-size: 12px;
      font-weight: 600;
      width: 130px;
      height: auto;
      padding: 7px 20px;
      text-transform: uppercase;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      border: 1px solid ${(props) => props.theme.colors.goldmd};
      box-shadow: 2px 3px 7px 0 ${(props) => props.theme.colors.blackopacity};
      margin: 0 0 15px 15px;
      cursor: default;
      transition: all 0.3s ease-in-out;

      &:hover {
        font-weight: bold;
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 550px) {
    font-size: 14px;
    li {
      width: 100%;
      margin-top: 15px;
      p {
        width: 110px;
      }
    }
  }
`
