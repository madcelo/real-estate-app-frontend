import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/pages/HomePage";
import RealEstates from "./components/pages/RealEstates";
import EstatesDetails from "./components/pages/EstatesDetails";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/real-estates" element={<RealEstates />} />
          <Route path="/real-estates/:id" element={<EstatesDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;