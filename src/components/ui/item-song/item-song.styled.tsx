import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--secondary-bg);
  width: 100%;
`;

export const FirstLi = styled.li`
  /* margin-right: 138px; */
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 27px 40px 12px;
  margin-bottom: 31px;
`;

export const ArtistImage = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 36px;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: #69787b;
    backdrop-filter: blur(50%);
    line-height: 0px;
    color: white;
  }
`;

export const InfoArist = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 3px;

  p {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray1-color);
  }
`;

export const SubName = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 3px;
  margin-bottom: 8px;

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const NameArist = styled.li`
  margin-bottom: 8px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const TypeArtist = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray1-color);
  }
  p {
    padding: 3px 15px;
    font-size: 12px;
    font-weight: 600;
    color: #6993ff;
    background-color: rgba(39, 69, 145, 0.253);
    border-radius: 10px;
  }
`;

export const Keywords = styled.div`
  display: flex;
  gap: 5px;
  padding: 15px 0;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: #41414d;
    opacity: 0.3;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray1-color);
    margin-right: 10px;
    margin-left: 40px;
  }

  ul {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    li {
      padding: 8px 10px;
      font-size: 12px;
      font-weight: 600;
      color: white;
      background-color: var(--hover-button);
      border-radius: 20px;
    }
  }
`;

export const SecondLi = styled.li`
  /* margin-right: 74px; */
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;

  p {
    font-size: 12px;
  }
`;

export const Muted = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--gray1-color);
`;

export const Bitrate = styled.p`
  font-size: 12px;
  font-weight: 600;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 50;
    color: var(--accent-color);
  }

  &::before {
    position: absolute;
    content: "";
    top: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: rgba(217, 217, 217, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
`;

export const SoundToText = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;
  border-radius: 30px;
  background-color: #3f3f41;
  padding: 5px 15px;
  padding-left: 6px;

  span {
    font-size: 14px;
    padding: 5px 0;
    padding-left: 15px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const ThrityLi = styled.li`
  /* margin-right: 40px; */
`;

export const Popularity = styled.div``;

export const VideosInfo = styled.div`
  text-align: center;
  background-color: var(--hover-button);
  padding: 31px 24px 27px;

  p {
    font-size: 13px;
    margin-bottom: 12px;
    font-weight: 600;
    color: var(--gray1-color);
  }

  .amount {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .play-button {
    margin: 0 auto;
    color: var(--accent-color);
    display: flex;
    justify-content: space-around;
    gap: 6px;
    p {
      white-space: nowrap;
      color: var(--accent-color);
    }
  }
`;

export const Growth = styled.div`
  text-align: center;
  background-color: var(--green-color);
  padding: 26px 21px 25px;

  p {
    color: #aaffdb;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 18px;
  }
  span {
    font-size: 32px;
    font-weight: bold;
  }
`;
