import { useAppContext } from "../Context/AppContext";
import { useThemeContext } from "../Context/ThemeContext";

function ToggleTheme() {
    const [,dispatch] = useThemeContext();

    console.log('toggletheme:render',dispatch);
    return (
        <>
            <button onClick={() => dispatch({type:"toggleTheme"})}> Togle Theme</button>
        </>
      );
}

export default ToggleTheme;