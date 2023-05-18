import { useAppContext } from "../Context/AppContext";
import { useThemeContext } from "../Context/ThemeContext";

function DisplayTheme(){
   const [state]= useThemeContext();

    console.log('display theme :render',state.theme)
    return ( 
        <>ss
            <div>
                {state.theme}
            </div>
        </>

     );
}

export default DisplayTheme;