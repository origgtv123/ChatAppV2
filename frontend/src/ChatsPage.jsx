import {  PrettyChatWindow, useMultiChatLogic } from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
    return (
        <div style = {{height: '100vh'}}>
            <PrettyChatWindow
            projectId='2df27641-06aa-4698-afd7-e9f565d1524b'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
        )
}

export default ChatsPage