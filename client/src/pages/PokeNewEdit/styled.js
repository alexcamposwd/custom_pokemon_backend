import styled from 'styled-components'

export const MainContainer = styled.main`
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

  @media (max-width: 550px) {
    width: 100%;
    padding: 10px 15px 0 10px;
  }
`

export const CardPoke = styled.div`
  border: 2px solid ${(props) => props.theme.colors.goldmd};
  padding: 20px 30px;
  border-radius: 15px;
  max-width: 800px;
  width: 80%;
  margin: 30px 50px;

  h1 {
    font-weight: 800;
    text-align: center;
    color: ${(props) => props.theme.colors.goldmd};
    font-size: 36px;
    margin-bottom: 5px;
  }

  @media (max-width: 750px) {
    padding: 10px;
    width: 90%;
    margin: 20px 30px;

    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    margin: 10px;

    h1 {
      font-size: 28px;
    }
  }
`

export const LinePoke = styled.div`
  height: 3px;
  background-color: ${(props) => props.theme.colors.goldlight};
`

export const CardBodyPoke = styled.div`
  margin-top: 20px;

  @media (max-width: 550px) {
    margin-top: 10px;
  }
`

export const FieldsInfo = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin: 20px 0 10px 0;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gold};
  }

  input,
  textarea {
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: 17px;
    padding-left: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary2};
    background-color: ${(props) => props.theme.colors.sand};
  }

  input {
    height: 35px;
  }

  textarea {
    height: 120px;
    resize: none;
    padding: 10px;
  }

  span {
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.reddark};
  }

  @media (max-width: 550px) {
    margin-bottom: 10px;

    label {
      margin: 10px 0 10px 0;
      font-size: 14px;
    }

    input,
    textarea {
      font-size: 15px;
      padding-left: 10px;
    }

    input {
      height: 30px;
    }
  }
`

export const FieldsTypes = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 30px;

  label {
    height: 40px;
    font-size: 16px;
    padding: 8px 7px 0 0;
    color: ${(props) => props.theme.colors.gold};
  }

  input {
    width: 100%;
    height: 35px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: 17px;
    font-weight: 500;
    padding-left: 15px;
    color: ${(props) => props.theme.colors.primary2};
    background-color: ${(props) => props.theme.colors.sand};
  }

  span {
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.reddark};
  }

  @media (max-width: 550px) {
    margin-bottom: 10px;

    label {
      font-size: 14px;
      margin: 0 7px 0 0;
    }
    > label:nth-child(3) {
      margin: 0 7px;
    }

    input {
      height: 30px;
      font-size: 15px;
      padding-left: 10px;
    }
  }
`

export const WrapperFieldsTypes = styled.div`
  width: 50%;

  div {
    display: flex;
  }
`

export const FieldsStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    display: block;
    width: 12%;
    font-size: 16px;
    margin: 6px 7px 0 20px;
    color: ${(props) => props.theme.colors.gold};
  }

  input {
    width: 17.5%;
    height: 35px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    padding-left: 5px;
    color: ${(props) => props.theme.colors.primary2};
    background-color: ${(props) => props.theme.colors.sand};
  }

  @media (max-width: 750px) {
    label {
      width: 15%;
      font-size: 14px;
      margin: 0 7px 0 10px;
    }
  }

  @media (max-width: 550px) {
    label {
      width: 20%;
      font-size: 14px;
      margin: 10px 7px 0 10px;
    }

    input {
      width: 30%;
      height: 30px;
      font-size: 15px;
      padding-left: 0px;
    }
  }
`

export const WrapperFieldsStats = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0;

  span {
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.reddark};
  }
`

export const StatsItems = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  @media (max-width: 550px) {
  }
`

export const FieldsAbilities = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin: 20px 0 10px 0;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gold};
  }

  input,
  textarea {
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: 17px;
    font-weight: 500;
    padding-left: 15px;
    color: ${(props) => props.theme.colors.primary2};
    background-color: ${(props) => props.theme.colors.sand};
  }

  input {
    height: 35px;
  }

  textarea {
    height: 150px;
    resize: none;
    padding-top: 10px;
  }

  span {
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.reddark};
  }

  @media (max-width: 550px) {
    margin-bottom: 10px;

    label {
      margin: 10px 0 10px 0;
      font-size: 14px;
    }

    input,
    textarea {
      font-size: 15px;
      padding-left: 10px;
    }

    input {
      height: 30px;
    }
  }
`

export const FildButtons = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  gap: 60px;
  padding: 10px;

  @media (max-width: 550px) {
    width: 300px;
    height: 40px;
    gap: 40px;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 30px;
  right: 20px;
  border-radius: 7px;
  font-size: 15px;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.colors.goldmd};
  background-color: ${(props) => props.theme.colors.gold};
  box-shadow: 5px 6px 8px ${(props) => props.theme.colors.blackopacity};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin: auto;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    transform: scale(1.015);
  }

  @media (max-width: 550px) {
    width: 150px;
    font-size: 14px;
  }
`
