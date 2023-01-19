import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveContainer } from '../../../store/actions/set'
import Tooltip from '@mui/material/Tooltip'

// icons
import { Help as HelpIcon } from '@mui/icons-material'

function Lesson() {
  const dispatch = useDispatch()

  const handleSignUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    dispatch(setActiveContainer('signUp'))
  }
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
            <Tooltip
              title="須滿足這些條件再報名參加，方可達最佳效果"
              placement="top"
            >
              <HelpIcon style={{ color: '#303030', margin: '0 4px' }} />
            </Tooltip>
          </p>
          <p>需自備大浴巾 2 條</p>
          <p>穿著舒適衣褲，修剪指甲、消毒雙手，並配戴口罩</p>
          <p>課程由父母自行按摩嬰兒，教導者為輔助</p>
        </div>
      </div>
      <div className="hr" />
      <h3 className="content_title">教學內容</h3>
      <p className="desc_text">
        網頁前端的發展日新月異，隨時掌握最新的標準及開發趨勢至關緊要。本課程的講師迄今仍在業界有密集的實務經驗，確保你與國外資訊零落差，並能夠立即應用在職業中，取得優秀成果。
      </p>
      <p className="desc_text">
        課程中將提及的內容重質也重量，選擇下方的標籤，看看這些你將學到的知識，分屬於前端工程中的哪個知識範疇：
      </p>
      <div className="tags_content">
        <div className="tag">過場動畫</div>
        <div className="tag">語意化標籤</div>
        <div className="tag">基礎互動效果</div>
        <div className="tag">CSS3</div>
        <div className="tag">Bootstrap</div>
        <div className="tag">定位及排版技巧</div>
        <div className="tag">網站部署</div>
        <div className="tag">Flexbox表單</div>
        <div className="tag">Grid</div>
        <div className="tag">雲端字體</div>
        <div className="tag">瀏覽器行為差異</div>
        <div className="tag">網格系統</div>
        <div className="tag">層疊樣式表</div>
      </div>
      <div className="hr" />
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
        <button className="sign_up_btn" onClick={handleSignUp}>
          預約報名
        </button>
      </div>
    </div>
  )
}

export default Lesson
