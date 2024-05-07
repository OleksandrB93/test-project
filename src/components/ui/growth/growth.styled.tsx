import styled from "styled-components";

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: var(--accent-color);
  display: flex;
  gap: 5px;
  align-items: center;
  line-height: 2px;
`;

export const Section = styled.section`
  margin: 53px 0;
  padding: 0 33px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;

  li {
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;

    div {
      display: flex;
      gap: 2px;
      border-radius: 20px;
      padding: 7px 12px;
      color: black;

      font-size: 20px;
      font-weight: bold;
      line-height: 23px;
    }
    .text {
      font-size: 12px;
      padding-left: 10px;
      padding-right: 20px;
    }
  }
`;

//chart component
export const Chart = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 39px;
  position: relative;

  p {
    position: absolute;
    top: 30%;
    left: -30px;
    font-size: 12px;
    font-weight: 600;
    z-index: 2;
    transform: rotate(-90deg);
    color: var(--gray1-color);
  }
`;

export const ChartContainer = styled.div`
  width: 807px;
  height: 181px;
  position: relative;
`;

export const ChartBarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ChartBar = styled.div`
  width: 69px;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ChartLabel = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  margin-left: -12px;
  width: 20px;
  display: inline-block;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: var(--gray1-color);
`;

export const ChartValue = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

export const VerticalLabel = styled.div`
  width: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  position: absolute;
  bottom: 7px;
  left: -5%;

  span {
    position: relative;
    font-size: 10px;
    font-weight: bold;
    color: white;
    margin-top: 25px;
    &:first-child {
      margin-bottom: 30px;
    }
    &:after {
      position: absolute;
      content: "";
      width: 810px;
      height: 1px;
      z-index: -1;
      top: 100%;
      left: 135%;
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const UnderChart = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const Range = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  p {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray1-color);
  }
  button {
    display: flex;
    align-items: center;
    gap: 21px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--hover-button);
    border-radius: 20px;
    padding: 12px 15px;
    border: none;

    p {
      color: white;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-right: 40px;
  display: flex;
  gap: 5px;

  button {
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--hover-button);
    border-radius: 20px;
    padding: 12px 15px;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 0px;
    cursor: pointer;

    p {
      line-height: 1px;
    }
  }

  button:first-child {
    span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-bottom: 1px;
      background-color: var(--secondary-color);
    }
  }

  button:last-child {
    span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-bottom: 1px;
      background-color: var(--accent-color);
    }
  }
`;
