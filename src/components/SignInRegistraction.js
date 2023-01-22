import {useEffect, useState} from "react";

function SignInRegistration({isRegistration}){

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

    return(
        <div>
            <label>{label}</label>
            <input type="text" id="user-name" placeholder="login"/>
            <button className={`btn-sign-in`}>{btnLable}</button>
        </div>
    )
}

export default SignInRegistration