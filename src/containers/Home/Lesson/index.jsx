import React from 'react'

// icons
import { Help as HelpIcon } from '@mui/icons-material'

function Lesson() {
  return (
    <div className="lesson_wrap">
      <div className="notice_container">
        <div className="notice_box">
          <p className="subtitle">服務對象</p>
          <p>1個月 - 8個月以下的嬰兒</p>
          <p>父母</p>
        </div>
        <div className="notice_box">
          <p className="subtitle">上課時數</p>
          <p>共1堂，60分鐘</p>
          <p>課程費用免費，到府教學</p>
        </div>
        <div className="notice_box">
          <p className="subtitle">
            課程須知
            <HelpIcon />
          </p>
          <p>需自備大浴巾 2 條</p>
          <p>穿著舒適衣褲，修剪指甲、消毒雙手，並配戴口罩</p>
          <p>課程由父母自行按摩嬰兒，教導者為輔助</p>
        </div>
      </div>
      <div className="hr" />
      <h3 className="content_title">教學內容</h3>
      <h3 className="content_title">嬰兒按摩的好處</h3>
      <div className="video_content">
        <div className="frame_box">
          <video autoPlay muted loop playsInline>
            <source
              src="/video/Benefits_of_Infant_Massage.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="sign_up_content">
        <button className="primary_btn">立即預約</button>
      </div>
    </div>
  )
}

export default Lesson
