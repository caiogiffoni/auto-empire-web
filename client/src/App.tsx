import ModalDeleteAd from "./components/modal delete ad";
import ModalImage from "./components/modal image";
import ModalSuccess from "./components/modal succes"
import ModalCreateAd from "./components/modal create ad";
import ModalEditAd from "./components/modal edit ad";

function App() {
  return (
    <div className="App">
        <ModalCreateAd/>
        <ModalEditAd/>
        <ModalSuccess/>
        <ModalDeleteAd/>
        <ModalImage/>
    </div>
  );
}

export default App;
