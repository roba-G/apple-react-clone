import "../src/resources/css/styles.css";
import "../src/resources/css/bootstrap.css";
import '../src/resources/js/jquery-3.7.1';
import '../src/resources/js/bootstrap';
import '../src/resources/js/script'

import Header from "./components/Header";
import Alert from "./components/Alert";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
    </>
  );
}

export default App;
