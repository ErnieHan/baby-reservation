import React from 'react'

// icons
import {
  MessageOutlined as MessageIcon,
  EmojiFlagsOutlined as FlagIcon,
  CalendarMonth as CalendarIcon
} from '@mui/icons-material'
import FormBox from '../../../components/FormBox'
import Lesson from '../Lesson'

function Main() {
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
        <button className="tab_btn active">
          <MessageIcon style={{ marginRight: '8px' }} />
          課程說明
        </button>
        <button className="tab_btn">
          <CalendarIcon style={{ marginRight: '8px' }} />
          預約報名
        </button>
      </div>
      <Lesson />
      {/* <FormBox title="基本資料"></FormBox> */}
    </div>
  )
}

export default Main
