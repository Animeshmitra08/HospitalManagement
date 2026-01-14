import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Doctors from "./Pages/Doctors"
import AboutUs from "./Pages/AboutUs"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="doctors" element={<Doctors/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App