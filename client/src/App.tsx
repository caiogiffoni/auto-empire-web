import ModalDeleteAd from "./components/modal delete ad ad";
import ModalImage from "./components/modal image";
import ModalSuccess from "./components/modal succes"
import ModalCreateAd from "./components/modal create ad";

function App() {
  return (
    <div className="App">
        <ModalSuccess/>
        <ModalDeleteAd/>
        <ModalCreateAd/>
        <ModalImage/>
    </div>
  );
}

export default App;
