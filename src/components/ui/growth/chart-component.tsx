import { Fragment } from "react/jsx-runtime";
import * as s from "./growth.styled";
import { BiSolidChevronDown } from "react-icons/bi";

const ChartComponent = () => {
  const staticData = [
    { id: 1, value: 50, color: "#c704fe", day: "MO" },
    { id: 2, value: 70, color: "#c704fe", day: "TU" },
    { id: 3, value: 100, color: "#c704fe", day: "WE" },
    { id: 4, value: 120, color: "#c704fe", day: "TH" },
    { id: 5, value: 180, color: "#c704fe", day: "FR" },
    { id: 6, value: 250, color: "#c704fe", day: "SA" },
    { id: 7, value: 300, color: "#c704fe", day: "SU" },
    { id: 8, value: 320, color: "#c704fe", day: "MO" },
    { id: 9, value: 380, color: "#c704fe", day: "TU" },
    { id: 10, value: 0, color: "#c704fe", day: "WE" },
    { id: 11, value: 0, color: "#c704fe", day: "TH" },
  ];

  const maxValue = 500;
  const maxBarHeight = 181;
  const verticalLabels = ["100K", "200K", "300K", "400K", "500K"];
  return (
    <>
      <Fragment>
        <s.Chart style={{ display: "flex" }}>
          <p>Posts, AI Prediction</p>
          <s.ChartContainer>
            <s.VerticalLabel>
              {verticalLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </s.VerticalLabel>
            {staticData.map((item) => {
              const barHeight = (item.value / maxValue) * maxBarHeight;

              const barColor =
                item.value === 0
                  ? "linear-gradient(180deg, transparent 0%, #d0fd0a59 100%)"
                  : item.color;

              return (
                <s.ChartBarWrapper key={item.id}>
                  <s.ChartBar
                    key={item.id}
                    style={{
                      height: item.value === 0 ? "181px" : barHeight,
                      background: barColor,
                      border:
                        item.value === 0 ? "1px dashed #d0fd0a72 " : "none",
                      borderTop: "none",
                    }}
                    color={barColor}
                  />
                  <s.ChartValue>
                    {item.value === 0 ? "" : `${item.value + "K"}`}
                  </s.ChartValue>
                  <s.ChartLabel>{item.day}</s.ChartLabel>
                </s.ChartBarWrapper>
              );
            })}
          </s.ChartContainer>
        </s.Chart>
      </Fragment>
      <Fragment>
        <s.UnderChart>
          <s.Range>
            <p>Date Range</p>
            <button>
              <p>Last Month</p>
              <BiSolidChevronDown />
            </button>
          </s.Range>
          <s.ButtonGroup>
            <button>
              <span></span>
              <p>Growth</p>
            </button>
            <button>
              <span></span>
              <p>AI Prediction</p>
            </button>
          </s.ButtonGroup>
        </s.UnderChart>
      </Fragment>
    </>
  );
};

export default ChartComponent;
