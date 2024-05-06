import { Normalize } from "styled-normalize";
import "./App.css";
import GlobalStyle from "./components/globalStyles";
import HeaderComponent from "./components/ui/header/header-component";
import SidebarComponent from "./components/ui/sidebar/sidebar-component";
import ItemSongComponetn from "./components/ui/item-song";
import GrowthComponent from "./components/ui/growth";

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <SidebarComponent />
      <main>
        <HeaderComponent />
        <ItemSongComponetn />
        <GrowthComponent />
      </main>
    </>
  );
}

export default App;
