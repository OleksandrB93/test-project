import BurgerButtonIcon from "../../svg-icons/burger-button-icon";
import CogIcon from "../../svg-icons/cog-icon";
import NotificationIcon from "../../svg-icons/notification-icon";
import SidebarExpandedIcon from "../../svg-icons/sidebar-expanded-icon";
import * as s from "./sidebar.styled";

const SidebarComponent = () => {
  return (
    <s.SidebarContainer>
      <s.Sidebar>
        <s.SidebarContent>
          <BurgerButtonIcon />
          <s.ButtonsGroup>
            <NotificationIcon />
            <CogIcon />
            <img src="src/assets/images/ava.png" alt="" />
          </s.ButtonsGroup>
        </s.SidebarContent>
      </s.Sidebar>

      <s.SidebarButton>
        <SidebarExpandedIcon />
      </s.SidebarButton>
    </s.SidebarContainer>
  );
};

export default SidebarComponent;
