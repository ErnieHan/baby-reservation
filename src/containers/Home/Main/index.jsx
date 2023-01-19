import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveContainer } from '../../../store/actions/set'

// icons
import {
  MessageOutlined as MessageIcon,
  CalendarMonth as CalendarIcon
} from '@mui/icons-material'

// containers
import Lesson from '../Lesson'
import Reservation from '../Reservation'

function Main() {
  const dispatch = useDispatch()
  const activeContainer = useSelector(state => state.set.activeContainer)

  const tabs = [
    {
      name: '課程說明',
      value: 'lesson',
      icon: <MessageIcon style={{ marginRight: '8px' }} />
    },
    {
      name: '預約報名',
      value: 'reservation',
      icon: <CalendarIcon style={{ marginRight: '8px' }} />
    }
  ]

  const handleTab = value => {
    dispatch(setActiveContainer(value))
  }

  return (
    <div className="main_container">
      <div className="top_banner">
        <img className="banner_title_img" src="/images/banner_logo.png" />
      </div>
      <h1 className="title">嬰兒按摩親子課程</h1>
      <h2 className="sub_description">
        嬰兒按摩，是藉由愛的撫觸來增進父母與嬰兒的關係，讓彼此達到心連心，用雙手、雙眼和心靈去觸動孩子，讓孩子與父母的世界相互連結在一起。
      </h2>
      <div className="switch_buttons_wrap">
        {tabs.map((data, index) => (
          <button
            key={index}
            className={`tab_btn ${
              activeContainer === data.value ? 'active' : ''
            }`}
            onClick={() => handleTab(data.value)}
          >
            {data.icon}
            {data.name}
          </button>
        ))}
      </div>
      {activeContainer === 'lesson' && <Lesson />}
      {activeContainer === 'reservation' && <Reservation />}
    </div>
  )
}

export default Main
