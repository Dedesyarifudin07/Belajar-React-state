import {createContext, useContext, useMemo } from "react";
import {useReducer} from 'react';
export const ThemeContext = createContext({});

export function useThemeContext(){
    return useContext(ThemeContext);
}
function reducer(state,action){
   if(action.type === "toggleTheme"){
    return {...state,theme:state.theme === "Dark" ? "light" :"Dark"};
   }else if(typeof Error){
        throw new Error();
   }
   else{
    throw new Error('eror bangsattt');
   }
}

const initialState = {
    theme:'Dark',
}

export function ThemeProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState);
    const themeContextValue =  [state,dispatch] ;
    return(
        <>
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
        </>
    );
}