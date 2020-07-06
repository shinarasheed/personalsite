import React from "react"
import "../css/main.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
