import React from 'react'

// icons
import { EmojiFlagsOutlined as FlagIcon } from '@mui/icons-material'

function FormBox({ title, children }) {
  return (
    <div className="form_box_wrap">
      <p className="title">
        <FlagIcon
          style={{ marginRight: '8px', color: 'var(--primary-color)' }}
        />
        {title}
      </p>
      {children}
      <p className="subtitle">
        家長姓名
        <span className="required_mark">*</span>
      </p>
      <input
        className="input_text"
        type="text"
        placeholder="請輸入姓名"
        name="name"
      />
    </div>
  )
}

export default FormBox
