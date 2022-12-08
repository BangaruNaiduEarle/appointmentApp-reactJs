// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointments: [], title: '', date: ''}

  onclickAddAppointment = () => {
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointments: [...prevState.appointments, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickStarred = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  isStarredAppointments = () => {
    const {appointments} = this.state
    const filteredAppointments = appointments.filter(
      each => each.isStarred === true,
    )

    this.setState({appointments: filteredAppointments})
  }

  render() {
    const {appointments, title, date} = this.state

    return (
      <div className="mainBgContainer">
        <div className="appointmentBg">
          <div className="imgContainer">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="TitleEle" className="title">
                Title
              </label>
              <br />
              <input
                type="text"
                value={title}
                id="TitleEle"
                placeholder="Title"
                className="titleInput"
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="Date" className="title">
                Date
              </label>
              <br />
              <input
                value={date}
                type="date"
                id="Date"
                className="titleInput"
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDate}
              />
              <div>
                <button
                  type="button"
                  className="add-btn"
                  onClick={this.onclickAddAppointment}
                >
                  Add
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointmentImg"
            />
          </div>
          <hr className="horizontal" />
          <div className="appointmentStarred">
            <h1 className="heading">Appointments</h1>
            <div>
              <button
                type="button"
                className="starredBtn"
                onClick={this.isStarredAppointments}
              >
                starred
              </button>
            </div>
          </div>
          <ul className="unOrderList">
            {appointments.map(each => (
              <AppointmentItem
                eachAppointment={each}
                key={each.id}
                onClickStarred={this.onClickStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
