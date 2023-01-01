import React, {useContext} from 'react'
import {ReactComponent as StarIcon} from "../assets/svg/starIcon.svg"
import {AppContext} from '../context/AppContext'
import {toast} from 'react-toastify'


function Rating() {
  const {rating} = useContext(AppContext)

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success("Thanks for rating us")
  }

  return (
    <div className="projects-section" style={{padding: "50px"}}>
      <div className="projects-section-header">
        <p>Rating</p>
        <p className="time">December, 12</p>
      </div>
      <div>
        <div>
          <div className='message-content' style={{position: "relative", top: "50px"}}>
            <form onSubmit={onSubmit}>
                <h3 className='msgie'>How would you rate your service with us?</h3>
                <div style={{display: "flex"}}>
                  {rating.map((item) => (
                      <RatingSelect key={item.id} item={item} />
                  ))}
                </div>
                <button type='submit' style={{display: "none"}} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const RatingSelect = ({item}) => {
  return (
      <div className="star-checkbox" style={{padding: "35px"}}>
          <input type="checkbox" id={item.id} />
          <label htmlFor={item.id}><StarIcon /></label>
      </div>
  )
}

export default Rating