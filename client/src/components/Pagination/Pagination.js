import styled from 'styled-components'

export const ContainerPagination = styled.article`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-bottom: 10px;
`
export const SectionBtn = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 750px) {
    width: 250px;
    font-size: 13px;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }

  button {
    display: flex;
    width: 35px;
    height: 22px;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.grey8};
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.primary2};
    opacity: 0.8;
    cursor: pointer;

    @media (max-width: 750px) {
      width: 25px;
      height: 17px;
      font-size: 13px;
    }
    @media (max-width: 630px) {
      font-size: 12px;
    }

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.grey6};
      background-color: ${(props) => props.theme.colors.grey9};
      font-weight: 600;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.grey6};
      background-color: ${(props) => props.theme.colors.grey9};
      font-weight: 600;
      opacity: 1;
    }
  }
`

export const SectionSelect = styled.section`
  display: flex;
  width: 100px;
  height: auto;
  justify-content: flex-end;
  gap: 5px;
  margin-right: 30px;

  select {
    width: 60px;
    height: 25px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.primary2};
    opacity: 0.8;
    cursor: pointer;

    @media (max-width: 750px) {
      width: 50px;
      font-size: 13px;
    }
    @media (max-width: 630px) {
      width: 40px;
      font-size: 12px;
    }
  }
`
