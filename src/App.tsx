import React from "react";
import Header from "./components/header"
import Menu from "./components/menu";
import MainContent from "./pages/main-screen/mainContent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorButton from "./components/LogCreator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTable from "./pages/station-list/createTableOfStations";
import StationDetailView from "./pages/station-detail/stationDetails";
import Statisctics from "./pages/statistica/statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
      <Router>
      <Menu />
      <Routes>  
        <Route path="/" element={<MainContent />} />
        <Route path="/table" element={<CreateTable />} />
        <Route path="/station/:id" element={<StationDetailView />} />
        <Route path="/statistica" element={<Statisctics/>} />
        {/* <Route path="/transactions" element={<Transactions />} />
        <Route path="/something" element={<Something />} /> */}
        </Routes>
      </Router>

      </div>
      <ErrorButton />
      <ToastContainer />
    </div>
    
  );
}

export default App;
