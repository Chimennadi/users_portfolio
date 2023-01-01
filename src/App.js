import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Message from "./components/Message"
import { Sidebar } from "./components/Sidebar"
import Home from "./pages/Home"
import Rating from "./pages/Rating"
import Profile from "./pages/Profile"
import Project from "./pages/Project"



function App() {
  return (
    <>
      <Header />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route eaxct path="/" element={<Home />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <ToastContainer />
          <Message />
        </div>
    </>
  )
}

export default App