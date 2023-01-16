import ChatList from "./ChatsList";
function MainWindow(){

    return(
        <div className={"main-container"}>
            <div className={"chats-list-container"}>
                <ChatList/>
            </div>
            <div className={"chat-window"}>
                Chat
            </div>
        </div>
    );
}

export default MainWindow;