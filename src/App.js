import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <Form />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
