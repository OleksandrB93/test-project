import styled from "styled-components";

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: var(--accent-color);
  display: flex;
  gap: 5px;
`;

export const Section = styled.section`
  margin: 53px 0;
  padding: 0 33px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
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
      padding-left: 10px;
      padding-right: 20px;
    }
  }
`;
