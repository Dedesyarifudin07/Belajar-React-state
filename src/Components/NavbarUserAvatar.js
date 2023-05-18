import { useAppContext } from "../Context/AppContext";


function NavbarUserAvatar () {
    const [state] = useAppContext();
    console.log('NAVBAR user avatar :render')
    return(
        <>
            <h1>
                Navbar User Avatar
            </h1>
                <img src={state.user.url} />
                <h1>{state.user.name}</h1>
        </>

)
}

export default NavbarUserAvatar;