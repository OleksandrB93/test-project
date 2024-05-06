import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;

  padding: 13px 40px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--muted-color);
`;

export const InfoButtonsGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 28px;

  div {
    font-size: 10px;
    font-weight: bold;
    color: var(--muted-color);
  }

  button {
    display: flex;
    gap: 6px;
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--button-color);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--button-hover);
    }
  }
`;
