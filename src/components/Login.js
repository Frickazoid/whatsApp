import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import SignInRegistraction from "./SignInRegistraction";

function Login() {

    const nv = useNavigate();
    return (
        <Tabs>
            <div label="Sign In">
                <SignInRegistraction isRegistration={false}/>
            </div>
            <div label="Registration">
                <SignInRegistraction isRegistration={true}/>
            </div>
        </Tabs>
    )
}

export default Login