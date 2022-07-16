import { Component } from "react";
import Message from "../Message";
import "./ChatHistory.scss";

class ChatHistory extends Component {
    render() {
        // const message = this.props.chatHistory.map((msg, index) => (
        //     <Message message={msg.data} />
        // ));
        const messages = this.props.chatHistory.map((msg) => {
            return <Message message={msg.data} />
        });
        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;