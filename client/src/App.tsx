import ModalDeleteAd from "./components/modal delete ad";
import ModalImage from "./components/modal image";
import ModalSuccess from "./components/modal succes"
import ModalCreateAd from "./components/modal create ad";
import ModalEditAd from "./components/modal edit ad";
import ModalEditProfile from "./components/modal edit profile";
import ModalEditAddress from "./components/modal edit address";

function App() {
  return (
    <div className="App">
        <ModalSuccess/>
        <ModalImage/>
        <ModalCreateAd/>
        <ModalEditAd/>
        <ModalDeleteAd/>
        <ModalEditProfile/>
        <ModalEditAddress/>
    </div>
  );
}

export default App;
