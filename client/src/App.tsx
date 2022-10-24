import ModalDeleteAd from "./components/modal delete ad";
import ModalImage from "./components/modal image";
import ModalSuccess from "./components/modal succes"
import ModalCreateAd from "./components/modal create ad";
import ModalEditAd from "./components/modal edit ad";
import ModalEditProfile from "./components/modal edit profile";

function App() {
  return (
    <div className="App">
        <ModalSuccess/>
        <ModalImage/>
        <ModalCreateAd/>
        <ModalEditAd/>
        <ModalDeleteAd/>
        <ModalEditProfile/>
    </div>
  );
}

export default App;
