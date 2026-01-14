import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Doctors from "./Pages/Doctors"
import AboutUs from "./Pages/AboutUs"
import Signup from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="doctors" element={<Doctors/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App