import styled from "styled-components";

export const Section = styled.section`
  margin: 48px 33px 0;
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  line-height: 2px;
  margin-bottom: 17px;

  span {
    color: var(--accent-color);
  }
`;

export const Notify = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--hover-button);
  padding: 0px 216px 0;
  margin-bottom: 53px;

  img {
    margin-bottom: -10px;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    margin-right: 20px;
  }

  button {
    padding: 3px 12px;
    color: black;
    background-color: var(--accent-color);
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;

  span {
    cursor: pointer;
    line-height: 1px;
    font-size: 14px;
    font-weight: bold;

    &:first-child {
      color: var(--accent-color);
      text-decoration: underline;
      text-decoration-color: var(--accent-color);
      text-underline-offset: 11px;
      text-decoration-thickness: 2px;
    }

    &:last-child {
      display: flex;
      align-items: center;
      color: var(--gray1-color);
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -9.5px;
    left: 0;
    width: 100%;
    height: 1.8px;
    background-color: var(--gray1-color);
  }
`;

export const Followed = styled.div`
  display: flex;
  overflow: hidden;
  padding: 10px 288px;
  background-image: linear-gradient(to right, #0f0f10, #202021b4, #0f0f10);
  position: relative;
  margin-bottom: 30px;

  p {
    display: flex;
    span {
      margin: 0 5px;
      color: var(--accent-color);
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -10%;
    left: 28%;
    width: 100px;
    height: 50px;
    background-color: red;
    border-radius: 20px;
    filter: blur(10px);
  }
`;

export const FollowedTolls = styled.ul`
  li {
    div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .sub {
      display: flex;
      flex-direction: column;
      align-items: start;
      .arrow {
        border: none;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          top: -22px;
          left: 9px;
          width: 29px;
          height: 39px;
          border-radius: 10px;
          border: 2px solid var(--gray-color);
        }
      }

      .sub-content {
        .square {
          position: relative;
          display: block;
          width: 20px;
          height: 20px;
        }
        p {
          white-space: nowrap;
          margin-left: 10px;
        }
      }
    }

    span {
      width: 20px;
      height: 20px;
      border: 1px solid var(--gray-color);
      position: relative;
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;

      &.checked {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--accent-color);
        transition: var(--transition);
      }
    }
  }
`;

export const NoneEvents = styled.div`
  display: flex;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    color: var(--gray1-color);
  }

  background-color: #212124;
  padding: 10px 20px;
  padding-left: 10px;
  margin-left: -10px;
`;

export const IconBox = styled.span`
  margin-left: 20px;
  /* display: flex !important; */
  border: none !important;
`;

export const LockText = styled.span`
  color: #d1fd0a;
`;
