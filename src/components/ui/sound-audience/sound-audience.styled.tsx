import styled from "styled-components";

export const Section = styled.section`
  margin: 0 33px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;

    li {
      width: 425px;
      .icon-value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;

        span {
          display: flex;
          align-items: center;
          gap: 8px;

          p {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
      .range {
        width: 100%;
        height: 8px;
        background-color: var(--hover-button);
        margin: auto;
        span {
          position: relative;
          display: block;
          width: 425px;
          height: 4px;
          background-color: var(--accent-color);
          border: 2px solid #3f461e;

          &::before {
            position: absolute;
            content: "";
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            width: 2px;
            height: 10px;
            background-color: white;
          }
        }
      }
    }
    li:last-child {
      grid-column: 2;
      grid-row: 4;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  line-height: 2px;
  margin-bottom: 31px;
`;
