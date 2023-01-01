import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import {toast} from "react-toastify"
import { ReactComponent as SearchIcon } from "../assets/svg/searchIcon.svg"
import { ReactComponent as ThemeIcon } from "../assets/svg/themeIcon.svg"
import { ReactComponent as AddIcon } from "../assets/svg/addIcon.svg"
import { ReactComponent as NotificationIcon } from "../assets/svg/notificationIcon.svg"
import { ReactComponent as MessageIcon } from "../assets/svg/messageIcon.svg"


function Header() {
    const {text, setText} = useContext(AppContext)

    const img = require("../assets/img/IMG_2025.jpg")
    const searchStyle = {
        position: "relative", 
        left: "200px"
    }

    const onChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()

        if(text === "") {
            toast.error("Please enter something")
        } else {
            toast.success("project successfully listed")
        }
    }

    const handleClick = () => {
        let modeSwitch = document.querySelector('.mode-switch');
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    }

    const messageOpen = () => {
        document.querySelector('.messages-section').classList.add('show')
    }

    return (
        <div className="app-header">
            <div className="app-header-left">
                <span className="app-icon"></span>
                <p className="app-name">Portfolio</p>              
                <div className="search-wrapper">
                    <form onSubmit={onSubmit}>
                        <input className="search-input" type="text" placeholder="Search for projects" value={text} onChange={onChange} />
                        <SearchIcon style={searchStyle} />
                        <button type="submit" style={{display: "none"}}></button>
                    </form>
                </div>    
            </div>
            <div className="app-header-right">
                <button className="mode-switch" title="Switch Theme" onClick={handleClick}><ThemeIcon /></button>
                <button className="add-btn" title="Add New Project"><AddIcon /></button>
                <button className="notification-btn"><NotificationIcon /></button>
                <button className="profile-btn"><img src={img} alt="avarta" /><span>Aybüke C.</span></button>
            </div>
            <button className="messages-btn" onClick={messageOpen}><MessageIcon /></button>
        </div>
    )
}

export default Header