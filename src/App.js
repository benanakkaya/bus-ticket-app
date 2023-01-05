import BusListing from "./pages/BusListing";
import HomePage from "./pages/HomePage";
import Voyages from "./contexts/Voyages";
import PurchasePage from "./pages/PurchasePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservations from "./contexts/Reservations";
import Users from "./contexts/Users";
import UserModal from "./components/UserModal";
import ReservationPage from "./pages/ReservationPage";
import TicketCheckPage from "./pages/TicketCheckPage";
import MyReservationsPage from "./pages/MyReservationsPage";
import Languages from "./contexts/Languages";
import LanguageModal from "./components/LanguageModal";


function App() {

  return (
    <div className="App">
      <Router>
        <Languages>
          <Voyages>
            <Reservations>
              <Users>
                <UserModal />
                <LanguageModal />
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/bus-list" element={<BusListing />} />
                  <Route path="/ticket-purchase" element={<PurchasePage />} />
                  <Route path="/reservation-view" element={<ReservationPage />} />
                  <Route path="/ticket-check" element={<TicketCheckPage />} />
                  <Route path="/my-reservations" element={<MyReservationsPage />} />
                </Routes>
              </Users>
            </Reservations>
          </Voyages>
        </Languages>
      </Router>
    </div>
  );
}

export default App;


