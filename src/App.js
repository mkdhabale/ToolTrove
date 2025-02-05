import "./styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Footer from "./pages/Footer/Footer";
import RegisterRoutes from "./routes/RegisterRoutes";

function App() {
  return (
    <div className="App">
      <RegisterRoutes></RegisterRoutes>
      <Footer email="mukul.dhabale@gmail.com" phone="2599361">
        <FontAwesomeIcon icon={faCopyright} />
      </Footer>
    </div>
  );
}

export default App;
