import Navigation from "./components/Navigation"
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";



function App() {

  return (
    <>
<Navigation />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element ={<About />}></Route>
<Route path="/contacts" element= {<Contacts />}></Route>
</Routes>

    </>
  )
}

export default App
