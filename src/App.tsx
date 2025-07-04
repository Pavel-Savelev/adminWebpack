import React from "react";
import Header from "./components/header"
import Menu from "./components/menu";
import MainContent from "./pages/main-screen/mainContent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ErrorButton from "./components/LogCreator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTable from "./pages/station-list/createTableOfStations";
import StationDetailView from "./pages/station-detail/stationDetails";
import Statisctics from "./pages/statistica/statistics";
import LogsPage from "./pages/station-logs/logPage";
import SessionOfStations from "./pages/sessions/session";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="main-content">
        <Menu />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/table" element={<CreateTable />} />
          <Route path="/station/:productNumber" element={<StationDetailView />} />
          <Route path="/diagrams" element={<Statisctics />} />
          <Route path="/station/list" element={<SessionOfStations/>} />
          <Route path="/logs" element={<LogsPage />} />
        </Routes>
      </div>
      <ToastContainer />
      </div>
    </Router>
    
  );
}

export default App;
