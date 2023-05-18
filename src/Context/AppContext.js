import {createContext, useContext } from "react";

import { useEffect,useReducer} from 'react';
export const AppContext = createContext({});

export function useAppContext(){
    return useContext(AppContext);
}
function reducer(state,action){
   if(action.type === "updateUser"){
    return {...state,user:action.payload}
   }else{
    throw new Error('eror bangsattt');
   }
}


const initialState = {
    user:{},
}

export function AppProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState);

    // const [user,setUser] = useState({});
    // const [theme,setTheme] = useState('dark');

    useEffect(() => {
        const user = {
          name:'dede',
          url:'https://randomuser.me/api/portraits/men/9.jpg'
        }
        dispatch({
            type:"updateUser",
            payload:user,
        })
      },[])

    const AppContextValue = [state,dispatch];

    return(
        <>
        <AppContext.Provider value={AppContextValue}>
          
             {children}
           
        </AppContext.Provider>
        </>
    );
}