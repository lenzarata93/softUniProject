import { Link } from "react-router-dom";

const Navigation = ()=>{
return (
<nav>
    <Link to='/'>HOME</Link>
    <Link to='/about'>ABOUT</Link>
    <Link to='/contacts'>CONTACTS</Link>
 
</nav>
);

};
export default Navigation;