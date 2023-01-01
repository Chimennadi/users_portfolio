import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as HomeIcon } from "../assets/svg/homeIcon.svg"
import { ReactComponent as CommentsIcon } from "../assets/svg/commentsIcon.svg"
import { ReactComponent as ProjectIcon } from "../assets/svg/projectIcon.svg"
import { ReactComponent as ProfileIcon } from "../assets/svg/profileIcon.svg"


export const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }

    return (
        <div className="app-sidebar">
            <div className={`app-sidebar-link ${pathMatchRoute("/") && "active"}`} onClick={() => navigate('/')}><HomeIcon /></div>
            <div className={`app-sidebar-link ${pathMatchRoute("/rating") && "active"}`} onClick={() => navigate('/rating')}><CommentsIcon /></div>
            <div className={`app-sidebar-link ${pathMatchRoute("/project") && "active"}`} onClick={() => navigate('/project')}><ProjectIcon /></div>
            <div  className={`app-sidebar-link ${pathMatchRoute("/profile") && "active"}`} onClick={() => navigate('/profile')}><ProfileIcon /></div>
        </div>
    )
  }