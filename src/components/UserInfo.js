function UserInfo({chatsCount}) {

    function getAllUsers() {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => console.log(data.data));
    }

    return (
        <div className={`user-info-container`}>
            <div className={`user-info-container--left`}>
                <div className={`user-info-name`}>
                    Test user
                </div>
                <div className={`user-info-chats-count`}>
                    Current chats: {chatsCount}
                </div>
            </div>
            <div className={`user-info-container--right`}>
                <button className={`btn-new-chat`} onClick={getAllUsers}>
                    New chat
                </button>
            </div>
        </div>
    )

}

export default UserInfo