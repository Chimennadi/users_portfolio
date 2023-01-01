import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import ProjectStatus from "../components/ProjectStatus"
import { ReactComponent as ListView } from "../assets/svg/listView.svg"
import { ReactComponent as GridView } from "../assets/svg/gridView.svg"
import { ReactComponent as ProjectBtn } from "../assets/svg/projectBtn.svg"
import { ReactComponent as AddUserIcon } from "../assets/svg/addUserIcon.svg"

function Home() {
    const {text, projectText} = useContext(AppContext)
    const handleListView = () => {
        let listView = document.querySelector('.list-view')
        let gridView = document.querySelector('.grid-view')
        let projectsList = document.querySelector('.project-boxes')
        gridView.classList.remove('active')
        listView.classList.add('active')
        projectsList.classList.remove('jsGridView')
        projectsList.classList.add('jsListView')
    }

    const handleGridView = () => {
        let listView = document.querySelector('.list-view')
        let gridView = document.querySelector('.grid-view')
        let projectsList = document.querySelector('.project-boxes')
        gridView.classList.add('active')
        listView.classList.remove('active')
        projectsList.classList.remove('jsListView')
        projectsList.classList.add('jsGridView')
    }

    return (
        <div className="projects-section">
            <div className="projects-section-header">
                <p>Projects</p>
                <p className="time">December, 12</p>
            </div>
            <div className="projects-section-line">
                <ProjectStatus />
                <div className="view-actions">
                    <button className="view-btn list-view" title="List View" onClick={handleListView}><ListView /></button>
                    <button className="view-btn grid-view active" title="Grid View" onClick={handleGridView}><GridView /></button>
                </div>
            </div>
            <div className="project-boxes jsGridView">
                {projectText.map((item) => (
                    <ProjectCard key={item.id} item={item} text={text} />
                ))}
            </div>
        </div>
    )
}


const ProjectCard = ({item, text}) => {
    const {name, style, type, styles, progress, src, image, addUserStyle} = item
    const projectItems = document.querySelectorAll('.project-box-wrapper') 
    projectItems.forEach((project) => {
        if (project.textContent.includes(text)){ 
            project.style.display = 'block'
        } else {
            project.style.display = 'none'
        }
    })
  
    return (
        <div className="project-box-wrapper">
            <div className="project-box" style={style}>
                <div className="project-box-header">
                    <span>December 10, 2020</span>
                    <div className="more-wrapper"><button className="project-btn-more"><ProjectBtn /></button></div>
                </div>
                <div className="project-box-content-header">
                    <p className="box-content-header">{name}</p>
                    <p className="box-content-subheader">{type}</p>
                </div>
                <div className="box-progress-wrapper">
                    <p className="box-progress-header">Progress</p>
                    <div className="box-progress-bar"><span className="box-progress" style={styles}></span></div>
                    <p className="box-progress-percentage">{progress}%</p>
                </div>
                <div className="project-box-footer">
                    <div className="participants">
                        <img src={src} alt="img" />
                        <img src={image} alt="firstImage" />
                        <button className="add-participant" style={addUserStyle}><AddUserIcon /></button>
                    </div>
                    <div className="days-left" style={addUserStyle}>2 Days Left</div>
                </div>
            </div>
        </div>
    )
}
export default Home