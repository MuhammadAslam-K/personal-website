import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Homepage from "./Pages/Homepage"
import ResumePage from "./Pages/ResumePage"
import Projectpage from "./Pages/Projectpage"
import Aboutpage from "./Pages/Aboutpage"
import Blogspage from "./Pages/Blogspage"
import ContactPage from "./Pages/ContactPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Homepage />} path="/"/>
          <Route element={<ResumePage />} path="/resume"/>
          <Route element={<Projectpage/>} path="/project"/>
          <Route element={<Aboutpage />} path="/about"/>
          <Route element={<Blogspage />} path="/blogs"/>
          <Route element={<ContactPage />} path="/contact"/>
        </Routes>
      </Router>
    </>
  )
}

export default App
