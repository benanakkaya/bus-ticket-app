import BusListing from "./pages/BusListing";
import HomePage from "./pages/HomePage";
import Voyages from "./contexts/Voyages";
import PurchasePage from "./pages/PurchasePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservations from "./contexts/Reservations";
import Users from "./contexts/Users";
import UserModal from "./components/UserModal";



function App() {
  return (
    <div className="App">
      <Router>
        <Voyages>
          <Reservations>
            <Users>

              <UserModal />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/bus-list" element={<BusListing />} />
                <Route path="/ticket-purchase" element={<PurchasePage />} />


              </Routes>
            </Users>
          </Reservations>
        </Voyages>
      </Router>
    </div>
  );
}

export default App;


