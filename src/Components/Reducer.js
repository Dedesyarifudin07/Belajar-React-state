import { useReducer } from "react";

function reducer(state,action){
    if(action.type === "increment"){
        return {...state ,count:state.count + action.payload  };
    }else if(action.type === "decrement" && state.count <= 1){
        return {...state,count:state.count = 0};
    }else if(action.type === "decrement" && state.count >= 1){
        return {...state,count:state.count - action.payload} ;
    }else if(action.type === "toggleTheme"){
        return {...state,theme:state.theme === "light" ? "Dark" : "light"};
    } else{
        throw new Error('unexpected action');
    }
}

const initialState = {
    count : 0,
    theme:'light',
}


export function Reducer () {
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log(state)
    return ( 
        <>
            <button onClick={() => dispatch({type:"decrement",payload:1})}>-</button>
            <span> {state.count} </span>
            <button onClick={() => dispatch({type:"increment",payload:1})}> + </button>
            <br/>
            Theme:{state.theme}
            <button onClick={() => dispatch({type:"toggleTheme"})}>toggleTheme</button>
        </>
     );
}

