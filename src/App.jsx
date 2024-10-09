import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Communities from "./pages/Communities";
import Cursor from "./components/Cursor/Cursor";
import Intro from "./components/Intro";
import TabTitle from "./pages/Tabs/TabTitle";
import Scroll from "./pages/Scroll/Scroll";
import SportsPage from "./pages/SportsPage/SportsPage";
import Footer from "./pages/Footer/Footer";

import Contact from "./pages/Contact";
import Navigate from "./Routes/Navigate/Navigate";
import NavigateCommunity from "./Routes/Navigate/NavigateCommunity";
import NavigateEvents from "./Routes/Navigate/NavigateEvents";
import Newletter from "./components/Newletter/Newletter";
import NewspaperGrid from "./components/FlipCard/NewpaperGrid";
import Accordians from "./pages/Accordians/Accordians";
import Navbar from "../src/components/CreateTournament/Navbar/Navbar";
import Tournament from "../src/components/CreateTournament/Tournament"; 




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/tournament"
          element={
            <>
              <Navbar />
              <Tournament />
            </>
          }
        />
        <Route path="/community" element={<NavigateCommunity />} />
        <Route path="/events" element={<NavigateEvents />} />
        <Route
          path="/*"
          element={
            <>
              <Home />
              <Cursor />
              <Intro />

              <About />
              <Communities />
              <TabTitle />
              <NewspaperGrid />
              <Scroll />
              <SportsPage />
              <Newletter />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
