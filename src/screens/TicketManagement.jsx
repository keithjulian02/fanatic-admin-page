import React from "react";
//Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import EditableTable from "../components/Sections/EditableTable"

export default function TicketManagement() {
  return (
    <>
    <TopNavbar />
    <EditableTable />
    <Footer />
    </>
  );
}