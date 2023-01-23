import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import SignInRegistraction from "./SignInRegistraction";

function Login() {

    const nv = useNavigate();

    function onSignIn({username, type}){
        const capsName = username.toUpperCase();
        if (type === `Sing in`) {
            console.log(`sign in path`)
            fetch(`http://localhost:8080/api/user/${capsName}`)
                .then(response => response.json())
                .then(response => {
                    console.log(response.data)
                    if (response.data.length === 0) {
                        alert(`User ${username} not found`)
                    } else {
                        nv(`/`)
                    }
                });
        } else {
            console.log(`registration path`)
            const params = {
                username: username,
                capsName: capsName
            };
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            };
            console.log(params)
            fetch( 'http://localhost:8080/api/createuser', options )
                .then( response => {
                    if (response.status === 400) {
                        response.json()
                        alert(response.statusText)
                    } else {
                        alert(`User ${username} create successfully`)
                        //nv(`/`)
                    }
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });;
        }
    }

    return (
        <Tabs>
            <div label="Sign In">
                <SignInRegistraction isRegistration={false} onSignIn={onSignIn}/>
            </div>
            <div label="Registration">
                <SignInRegistraction isRegistration={true} onSignIn={onSignIn}/>
            </div>
        </Tabs>
    )
}

export default Login