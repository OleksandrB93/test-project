import { useState } from "react";
import LinkIcon from "../../svg-icons/link-icon";
import * as s from "./related-sounds.styled";
import { IoMdLock } from "react-icons/io";

const RelatedSoundsComponent = () => {
  const [activeTab, setActiveTab] = useState("Base");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleCheckedChange1 = () => {
    setChecked1(!checked1);
  };

  const handleCheckedChange2 = () => {
    setChecked2(!checked2);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <s.Section>
      <s.Title>
        <LinkIcon /> <span>Related</span> Sounds
      </s.Title>
      <s.Notify>
        <span>
          <img src="src/assets/images/dins.png" alt="din-don" />
        </span>
        <p>Notify me when these features start working</p>
        <button>Notify Me</button>
      </s.Notify>

      <s.Title>
        <LinkIcon /> <span>Recommendations</span> from AI
      </s.Title>

      {/* tabs */}
      <s.Tabs>
        <span onClick={() => handleTabChange("Base")}>{activeTab}</span>
        <span
          style={{ pointerEvents: "none" }}
          onClick={() => handleTabChange("Advanced")}
        >
          Advanced
          <IoMdLock size={16} color="#d1fd0a" />
        </span>
      </s.Tabs>

      <s.Followed>
        <span>😥</span>
        <p>
          you followed <span> 2/10</span>recommendations
        </p>
      </s.Followed>

      {/* content tab */}
      <s.FollowedTolls>
        <li>
          <div>
            <span onClick={handleCheckedChange1}>
              <span
                className="checked"
                style={{ width: "10px", height: checked1 ? "2px" : "10px" }}
              ></span>
            </span>
            <p>02:15 Recommendations for your song</p>
          </div>
        </li>
        <li>
          <div>
            <span onClick={handleCheckedChange2}>
              <span
                className="checked"
                style={{ width: "10px", height: checked2 ? "2px" : "10px" }}
              ></span>
            </span>
            <p>Duration for segments of your sound promo</p>
          </div>
          {/* sub content */}
          <>
            {checked2 && (
              <div className="sub">
                <div className="sub-content">
                  <span
                    style={{ width: "28px", height: "37px", marginRight: "0" }}
                    className="arrow"
                  ></span>
                  <p>Duration for segments of your sound promo</p>
                </div>

                <div className="sub-content">
                  <span
                    style={{ width: "28px", height: "37px", marginRight: "0" }}
                    className="arrow"
                  ></span>
                  <p>Duration for segments of your sound promo</p>
                </div>
              </div>
            )}
          </>
        </li>
        <li>
          <s.NoneEvents>
            <span></span>
            <p style={{ display: "flex", alignItems: "center" }}>
              Release day
              <IoMdLock
                style={{ marginLeft: "20px" }}
                size={18}
                color="#d1fd0a"
              />
              <s.IconBox style={{ border: "none" }}>
                <s.LockText
                  style={{
                    color: "#d1fd0a",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                >
                  Coming Soon
                </s.LockText>
              </s.IconBox>
            </p>
          </s.NoneEvents>
        </li>
        <li>
          <div>
            <span onClick={handleCheckedChange1}>
              <span
                className="checked"
                style={{ width: "10px", height: checked1 ? "2px" : "10px" }}
              ></span>
            </span>
            <p>Promotion</p>
          </div>
        </li>
        <li>
          <s.NoneEvents>
            <span></span>
            <p style={{ display: "flex", alignItems: "center" }}>
              Duet
              <IoMdLock
                style={{ marginLeft: "20px" }}
                size={18}
                color="#d1fd0a"
              />
              <s.IconBox style={{ border: "none" }}>
                <s.LockText
                  style={{
                    color: "#d1fd0a",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                >
                  Coming Soon
                </s.LockText>
              </s.IconBox>
            </p>
          </s.NoneEvents>
        </li>
        <li>
          <s.NoneEvents>
            <span></span>
            <p style={{ display: "flex", alignItems: "center" }}>
              The best location for the potential of your sound
              <IoMdLock
                style={{ marginLeft: "20px" }}
                size={18}
                color="#d1fd0a"
              />
              <s.IconBox style={{ border: "none" }}>
                <s.LockText
                  style={{
                    color: "#d1fd0a",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                >
                  Coming Soon
                </s.LockText>
              </s.IconBox>
            </p>
          </s.NoneEvents>
        </li>
      </s.FollowedTolls>
    </s.Section>
  );
};

export default RelatedSoundsComponent;
