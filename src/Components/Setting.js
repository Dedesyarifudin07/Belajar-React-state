import { useAppContext } from "../Context/AppContext";


function Setting() {
    const [state,dispatch] = useAppContext();
    console.log(state.user.name);
    console.log('setting: render')
    return (  
        <>
            <input type="text" 
             placeholder="change name" 
            //  onChange={(e) => context.setUser({
            //     ...context.user,
            //     name:e.target.value,
            //  })}
            //  value={context.user.name ?? ''}/>
            onChange={(e) => dispatch({type:"updateUser",
            payload : {
                ...state.user,
                name:e.target.value,
            }})
        } 
            value={state.user.name}
                     />
            
            <p>{state.user.name}</p>
        </>

    );
}

export default Setting;