// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, onClickStarred} = props

  const {id, title, date, isStarred} = eachAppointment

  const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    onClickStarred(id)
  }

  return (
    <li className="listItems">
      <div className="titleDate">
        <p className="titleHeading">{title}</p>

        <p className="dates">{formatDate}</p>
      </div>
      <div>
        <button type="button" className="starBtn" onClick={onClickStar}>
          <img src={starImg} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
