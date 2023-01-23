import {useEffect, useState} from "react";

function SignInRegistration({isRegistration, onSignIn}){

    const input = document.getElementById("user-name-input");
    const [label, setLable] = useState(``);
    const [btnLable, setBtnLable] = useState(``);

    useEffect(() => {
        if (isRegistration) {
            setLable(`Registration`);
            setBtnLable(`Submit`);
        } else {
            setLable(`Sign in`);
            setBtnLable(`Open chat`);
        }
    }, [])

    function onPress({username, type}) {
        onSignIn({username, type})
    }

    return(
        <div>
            <label>{label}</label>
            <input type="text" id="user-name-input" placeholder="login"/>
            <button className={`btn-sign-in`} onClick={() => onPress({username:input.value, type:label})}>{btnLable}</button>
        </div>
    )
}

export default SignInRegistration