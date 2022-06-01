import styled from 'styled-components'

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  min-width: 360px;
  min-height: 85vh;
  margin: auto;

  @media (max-width: 550px) {
    margin-top: 20px;
    height: 100%;
    min-height: 80vh;
  }
`

export const InfoTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gold};
  text-align: center;
  text-transform: capitalize;
  margin: 40px 0;

  @media (max-width: 550px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

export const SectionData = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
  }
`

export const FieldData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 550px) {
    width: 80%;
  }
`

export const InfoImg = styled.div`
  display: flex;
  width: 100%;
  max-height: 260px;
  justify-content: center;
`

export const ItemImg = styled.img`
  width: 200px;
  min-height: 200px;

  @media (max-width: 550px) {
    width: 140px;
    min-height: 120px;
  }
`

export const InfoTypes = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  margin-top: 25px;
`

export const ItemTypes = styled.div`
  width: 50%;
  max-width: 200px;
  border-radius: 7px;
  font-size: 20px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding-top: 8px;
  margin: 0 20px;

  &:nth-child(1) {
    margin-right: 40px;
    background-color: ${(props) => props.theme.colors.greendark};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.redmd};
  }

  @media (max-width: 750px) {
    width: 50%;
    height: 40px;
    padding-top: 11px;
    margin: 0 10px;
  }
  @media (max-width: 550px) {
    height: 40px;
    font-size: 16px;
    padding-top: 11px;
  }
  &:nth-child(1) {
    margin-right: 20px;
  }
`

export const InfoStats = styled.div`
  width: 50%;
  margin-top: 10px;
  margin-left: 10px;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
    margin-left: 30px;
  }
`

export const GroupStats = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary2};

  @media (max-width: 750px) {
    height: auto;
    min-height: 36px;
    font-size: 17px;
  }
  @media (max-width: 550px) {
    width: 95%;
    font-size: 16px;
    line-height: 25px;
  }

  p {
    width: 80px;
    margin-top: 10px;
  }
`

export const StatsName = styled.p`
  min-width: 139px;
  font-weight: 500;
  font-size: 19px;

  @media (max-width: 750px) {
    min-width: 100px;
  }
`

export const Bars = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 550px) {
    width: 250px;
    font-size: 16px;
  }
`

export const StatsNum = styled.p`
  font-size: 18px;
  margin-left: 10px;

  @media (max-width: 750px) {
    font-size: 17px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`

export const Underline = styled.div`
  width: 100%;
  height: 4px;
  background: ${(props) => props.theme.colors.gold};
  margin-left: auto;
  margin-right: auto;
`

export const InfoAbilities = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 550px) {
    height: auto;
    padding: 10px;
  }
`

export const AbilitiesTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.gold};

  @media (max-width: 550px) {
    font-size: 24px;
  }
`

export const GroupAbilities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  margin-top: 15px;

  @media (max-width: 550px) {
    height: auto;
    margin-top: 12px;
  }

  &:nth-child(3) {
    margin-bottom: 20px;
  }
`

export const AbilityTitle = styled.h2`
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.gold};

  @media (max-width: 550px) {
    font-size: 20px;
  }
`

export const AbilityText = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary2};
  margin-top: 7px;

  @media (max-width: 550px) {
    font-size: 15px;
    font-weight: 400;
  }
`

export const FieldButtons = styled.div`
  display: flex;
  width: 450px;
  height: 50px;
  gap: 50px;
  padding: 10px;

  @media (max-width: 550px) {
    width: 320px;
    height: 80px;
    gap: 20px;
  }
`

export const Button = styled.button`
  width: 100px;
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
    width: 70px;
    height: 30px;
    font-size: 14px;
  }
`

export const WarnMsg = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.reddark};
`
