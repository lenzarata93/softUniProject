import Navigation from "./components/Navigation"
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import TeamList from "./components/TeamList";
import TeamStat from "./components/TeamStat";



function App() {

  return (
    <>
<Navigation />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/teams" element={<TeamList />}></Route>
<Route path="/about" element ={<About />}></Route>
<Route path="/contacts" element= {<Contacts />}></Route>
<Route path="/details/:id" element= {<TeamStat />}></Route>
</Routes>

    </>
  )
}

export default App
