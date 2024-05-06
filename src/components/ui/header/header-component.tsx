import { LuDownload } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import * as s from "./header.styled";

const HeaderComponent = () => {
  return (
    <s.HeaderContainer>
      <s.Title>AI Pridection</s.Title>

      <s.InfoButtonsGroup>
        <div>
          <p>Last update: 13.03.2024</p>
          <p>Date added to the platform: 17.12.2023</p>
        </div>
        <button>
          <GrUpdate />
          <span>Update</span>
        </button>
        <button>
          <LuDownload />
          <span>Download</span>
        </button>
      </s.InfoButtonsGroup>
    </s.HeaderContainer>
  );
};

export default HeaderComponent;
