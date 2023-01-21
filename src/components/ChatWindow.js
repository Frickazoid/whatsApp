import {useEffect} from 'react';
import ChatMassage from "./ChatMassage";

function ChatWindow() {

    function addMassageArrey() {
        let massages = [];
        for(let i=0;i<20;i++){
            massages.push(<ChatMassage/>)}
        return massages
    }


    useEffect(() => {},[])

    return (
        <div className={`chat-window`}>
            <ul className={`chat-container`}>
                {addMassageArrey()}
            </ul>
            <div className={`massage-container`}>
                <label htmlFor="massage">Сообщение</label>
                <input type="text" id="massage" placeholder="введите текст"/>
            </div>
        </div>
    );
}

                export default ChatWindow;