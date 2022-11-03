import GlobalStyle from "./styles";
import { Home } from "./pages/Home";
import Providers from "./Providers";

function App() {
  return (
    <div className="App">
      <Providers>
      <GlobalStyle/>
      <Home/>
      {/* <Pages /> */}
      </Providers>
    </div>
  );
}

export default App;
