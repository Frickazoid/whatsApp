import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import SignInRegistraction from "./SignInRegistraction";

function Login() {

    const nv = useNavigate();

    function onSignIn({username, type}){
        const capsName = username.toUpperCase();
        if (type = `Sing in`){
        fetch(`http://localhost:8080/api/user/${capsName}`)
            .then( response => response.json() )
            .then( response => {
                console.log(response.data)
                if (response.data.length === 0){
                    alert(`User ${username} not found`)
                }else{
                    nv(`/`);
                }
            } );
        }else{
            //registraction fetch
        }
    }

    return (
        <Tabs>
            <div label="Sign In">
                <SignInRegistraction isRegistration={false} onSignIn={onSignIn}/>
            </div>
            <div label="Registration">
                <SignInRegistraction isRegistration={true}/>
            </div>
        </Tabs>
    )
}

export default Login