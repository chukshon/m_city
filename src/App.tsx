import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home/Home"
import Matches from "./pages/matches/Matches"
import PlayerInfo from "./pages/playerInfo/PlayerInfo"
import Team from "./pages/team/Team"
import Login from "./pages/login/Login"
import AdminPlayers from "./pages/dashboard/Players/AdminPlayers"
import AdminMatches from "./pages/dashboard/Matches/AdminMatches"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<AdminMatches />} />
          <Route path="admin-players" element={<AdminPlayers />} />
        </Route>
        <Route path="/matches" element={<Matches />} />
        <Route path="/team" element={<Team />} />
        <Route path="/player_info/:id" element={<PlayerInfo />} />
        <Route path="*" element={<h2>Does not exist</h2>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
