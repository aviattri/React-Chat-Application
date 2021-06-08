import {ChatEngine} from 'react-chat-engine';
import './App.css' ;
import ChatFeed from './Components/ChatFeed' ;
const App = () => {
    return (
        <ChatEngine
             height="100vh"
             
             projectID="99db4231-1753-4197-9975-82bc35a34781"

             // userName
             userName="Avi"
            //  userpassword
             userSecret="123"
             renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        />
    );
}

export default App;