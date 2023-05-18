import { Link,Routes,Route } from "react-router-dom";
import NavbarUserAvatar from "./NavbarUserAvatar";
import NavbarUser from "./NavbarUser";
import NavbarLink from "./NavbarLink";


function Navbar(){
        return(
            <div>
                <h1>
                    NAVBAR
                </h1>
                <ul>
                    <Link to='/NavbarUserAvatar'>Navbar User Avatar</Link>
                    <Link to='/NavbarUser'>Navbar User</Link>
                    <Link to='/NavbarLink'>Navbar Link</Link>
                </ul>
                <Routes>
                    <Route path="NavbarUserAvatar" element={<NavbarUserAvatar/>}/> 
                    <Route path="NavbarUser" element={<NavbarUser/>}/> 
                    <Route path="NavbarLink" element={<NavbarLink/>}/> 
                </Routes>
            </div>
        )
   
}

export default Navbar;