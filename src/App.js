import "./css/generic.css";
import "./css/variables.css";
import "./css/utilities.css";
import "./css/typography.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllRoutes from "./pages/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
