import ModalDeleteAd from "./components/modais/modal delete ad";
import ModalImage from "./components/modais/modal image";
import ModalSuccess from "./components/modais/modal succes"
import ModalCreateAd from "./components/modais/modal create ad";
import ModalEditAd from "./components/modais/modal edit ad";
import ModalEditProfile from "./components/modais/modal edit profile";
import ModalEditAddress from "./components/modais/modal edit address";
import { Pages } from "./pages";
import GlobalStyle from "./styles";
import Providers from "./Providers";

function App() {
  return (
    <div className="App">
      <Providers>
      <GlobalStyle/>
      <Pages />
      </Providers>
    </div>
  );
}

export default App;
