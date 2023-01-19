import React from 'react'
import PropTypes from 'prop-types'
import Cookies from 'cookies'

function Error({ t, language }) {
  return <div>Error Page</div>
}

export async function getServerSideProps(context) {
  const { req, res } = context
  const cookies = new Cookies(req, res)
  // cookies.set('hk-emphasis-language', req.language)
  return {
    props: {}
  }
}

Error.propTypes = {
  t: PropTypes.func.isRequired,
  language: PropTypes.string
}

export default Error
