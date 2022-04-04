import ContactForm from "./components/forms/ContactForm";
import Header from "./components/header/Header";
import Footer from "./components/layout/Footer";

import "./sass/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
