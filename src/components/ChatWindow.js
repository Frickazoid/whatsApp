import {useEffect} from 'react';
import ChatMassage from "./ChatMassage";

function ChatWindow() {

    function addMassageArray() {
        let massages = [];
        for(let i=0;i<10;i++){
            massages.push(<ChatMassage/>)}
        return massages
    }

    return (
        <div className={`chat-window`}>
            <ul className={`chat-container`}>
                {addMassageArray()}
            </ul>
            <div className={`massage-container`}>
                <label htmlFor="massage">Сообщение</label>
                <input type="text" id="massage" placeholder="введите текст"/>
                <button className={`btn-send-massage`}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;