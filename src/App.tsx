import "./App.css";
import HeaderComponent from "./components/ui/header/header-component";
import SidebarComponent from "./components/ui/sidebar/sidebar-component";
import ItemSongComponetn from "./components/ui/item-song";
import GrowthComponent from "./components/ui/growth";
import SoundAudienceComponent from "./components/ui/sound-audience";
import RelatedSoundsComponent from "./components/ui/related-sounds/related-sounds";

function App() {
  return (
    <>

      <SidebarComponent />
      <main>
        <HeaderComponent />
        <ItemSongComponetn />
        <GrowthComponent />
        <SoundAudienceComponent />
        <RelatedSoundsComponent />
      </main>
    </>
  );
}

export default App;
