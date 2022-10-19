import ModalCreateEditAd from "./components/modal create-edit ad";
import ModalEditAddress from "./components/modal edit address";
import ModalSuccess from "./components/modal succes"

function App() {
  return (
    <div className="App">
        <ModalSuccess/>
        <ModalCreateEditAd/>
        <ModalEditAddress/>
    </div>
  );
}

export default App;
