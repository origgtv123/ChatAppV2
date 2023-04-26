//import {  PrettyChatWindow, useMultiChatLogic,  } from 'react-chat-engine-pretty'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';



const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('2df27641-06aa-4698-afd7-e9f565d1524b', props.location.state.username, props.location.state.secret);
    return (
      <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
      </div>
    );
  };
  
  export default ChatsPage;
  