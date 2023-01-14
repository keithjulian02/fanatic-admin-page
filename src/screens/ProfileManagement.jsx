import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import ProfileTable from "../components/Sections/ProfileTable"

export default function ProfileManagement() {
  return (
    <React.Fragment>
      <TopNavbar />
      <ProfileTable />
      <Footer />
    </React.Fragment>
  );
}


