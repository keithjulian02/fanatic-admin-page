import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
// Screens
import ProfileManagement from "./screens/ProfileManagement.jsx";
import TicketManagement from "./screens/TicketManagement.jsx";




export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          </Helmet>
          <ProfileManagement />
        </>

      } />
      <Route path="/ticket-management" element={<TicketManagement />} />
    </Routes>

  )
}

