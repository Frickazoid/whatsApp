import UserInfo from "./UserInfo";

function ChatsList(){

    return (
        <div>
            <div className={`user-info`}>
                <UserInfo/>
            </div>
            <ul className={`chats-list`}>
                <li>Chat2</li>
                <li>Chat3</li>
                <li>Chat4</li>
                <li>Chat5</li>
                <li>Chat6</li>
                <li>Chat7</li>
            </ul>
        </div>

    );

}

export default ChatsList