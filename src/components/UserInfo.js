function UserInfo({chatsCount}) {
    return(
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
                <button className={`btn-new-chat`}>
                    New chat
                </button>
            </div>
        </div>
    )

}

export default UserInfo