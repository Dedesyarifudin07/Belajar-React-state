import { useAppContext } from "../Context/AppContext";

function NavbarLink () {
    const [state] = useAppContext();
    console.log('Navbar LInk :render')
    return(
    <>
        <h1>
            NAVBAR
        </h1>
        <img src={state.user.url}></img>
        <h3>{state.user.name}</h3>
    </>

    )
}

export default NavbarLink;