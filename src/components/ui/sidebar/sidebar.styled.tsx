import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  background-color: var(--background);
  width: 93px;
  height: 100vh;
`;

export const Sidebar = styled.div`
  position: relative;
  width: 90px;
  height: 100vh;
  color: var(--foreground);

  background-image: url("/images/blur_sidebar.png");
  background-position: -30px -57px;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(26, 33, 55, 0.8) 11%,
      rgba(53, 38, 76, 0.8) 21%,
      rgba(26, 51, 54, 0.8) 32%,
      rgba(0, 0, 0, 0.8) 49%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

export const SidebarContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(35px);
  background-color: #0d0d0e1a;
`;

export const SidebarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  stroke: #5f6062;
  cursor: pointer;

  transition: var(--transition);

  &:hover {
    stroke: white;
    background-color: var(--hover-button);
  }
`;

export const BurgerButtonIcon = styled.svg`
  padding: 13px;
  margin-top: 20px;
  border-radius: 50%;
  cursor: pointer;

  color: var(--foreground);
  transition: var(--transition);

  &:hover {
    background-color: var(--hover-button);
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  svg {
    padding: 13px;
    border-radius: 50%;
    cursor: pointer;
    fill: var(--gray-color);

    transition: var(--transition);

    &:hover {
      fill: white !important;
      background-color: var(--hover-button);
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin-top: -12px;
    margin-bottom: 20px;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
