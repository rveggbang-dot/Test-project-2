import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Join from "./pages/Join"
import Contact from "./pages/Contact"

export default function App(){
return (
<BrowserRouter>

<div className="min-h-screen bg-black text-white overflow-x-hidden">
  
<Navbar/>

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/events" element={<Events/>} />
<Route path="/join" element={<Join/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>

<Footer/>

</div>

</BrowserRouter>
)
}