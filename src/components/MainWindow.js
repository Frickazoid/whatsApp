import ChatList from "./ChatsList";
import ChatWindow from "./ChatWindow";
function MainWindow(){

    return(
        <div className={"main-container"}>
            <ChatList />
            <ChatWindow/>
        </div>
    );
}

export default MainWindow;