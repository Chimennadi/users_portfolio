import { useContext } from "react"
import { FaTimes } from "react-icons/fa"
import { ReactComponent as StarIcon } from "../assets/svg/starIcon.svg"
import { ReactComponent as MessageCloseIcon } from "../assets/svg/messageCloseIcon.svg"
import Card from "./shared/Card"
import { AppContext } from "../context/AppContext"

const MessageItem = ({message, handleClick}) => {
    const iconStyle = {
        position: "relative", 
        left: "137px", 
        backgroundColor: "transparent", 
        border: "none", 
        color: "#ff6a95",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <Card>
            <img src={message.image} alt="albe" />
            <div className="message-content">
                <div className="message-header">
                    <div className="name">{message.name}</div>
                    <button style={iconStyle} onClick={() => handleClick(message.id)} ><FaTimes /></button>
                    <div className="star-checkbox">
                        <input type="checkbox" id={message.id} />
                        <label htmlFor={message.id}><StarIcon /></label>
                    </div>
                </div>
                <p className="message-line">{message.content}</p>
                <p className="message-line time">{message.time}</p>
            </div>
        </Card>
    )
}

function Message() {
    const {messages, deleteMessage} = useContext(AppContext)
    
    const messageClose = () => {
        document.querySelector('.messages-section').classList.remove('show')
    }

    if(!messages || messages.length === 0) {
        return (
            <div className="messages-section">
                <button className="messages-close" onClick={messageClose}><MessageCloseIcon /></button>
                <div className="projects-section-header"><p>Client Messages</p></div>
                <div className="messages">
                    <div className="message-box">
                        <div className="message-header">
                            <div className="msgie">No message available</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="messages-section">
            <button className="messages-close" onClick={messageClose}><MessageCloseIcon /></button>
            <div className="projects-section-header"><p>Client Messages</p></div>
            <div className="messages">
                {messages.map((message) => (
                    <MessageItem key={message.id} message={message} handleClick={deleteMessage} />
                ))}               
            </div>
        </div>
    )
}

export default Message