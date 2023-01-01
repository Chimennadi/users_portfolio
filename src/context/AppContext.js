import { useState, createContext } from "react"
import Msg from "../data/Msg"
import ProjectText from "../data/ProjectText"
import RatingData from "../data/RatingData"

export const AppContext = createContext()

function AppProvider({ children }) {
    const [messages, setMessages] = useState(Msg)
    const [projectText, setProjectText] = useState(ProjectText)
    const [rating, setRating] = useState(RatingData)
    const [text, setText] = useState("")

    const deleteMessage = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setMessages(messages.filter((msg) => msg.id !== id))
        }
    }

  return (
    <AppContext.Provider value={{
      messages, 
      text, 
      projectText, 
      rating, 
      setRating, 
      setText, 
      deleteMessage, 
      setProjectText,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider