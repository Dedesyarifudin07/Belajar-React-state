import { useAppContext } from "../Context/AppContext";

function NavbarUser () {
    const [state] = useAppContext();
    console.log('Navbar User : Render');
    return(
        <>
           <h1>
              NAVBARUsers
           </h1>
           <span> {state.user.name}</span>
           <img src={state.user.url}  />
        </>

)
}

export default NavbarUser;