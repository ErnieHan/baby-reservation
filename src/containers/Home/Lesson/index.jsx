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
    </div>
  )
}

export default Lesson
