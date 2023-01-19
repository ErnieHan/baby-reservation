import App from 'next/app'
import React from 'react'
import PropTypes from 'prop-types'
import 'url-search-params-polyfill'
import { wrapper } from '../src/store'
// swiper
import 'swiper/swiper-bundle.css'
// fonts
import '@fontsource/noto-sans-tc'
import '@fontsource/noto-sans-tc/700.css'
import '@fontsource/noto-sans-tc/900.css'
// styles
import '../src/styles/globals.scss'
// containers
import '../src/containers/Layout/style.scss'
import '../src/containers/Home/Main/style.scss'
import '../src/containers/Home/Lesson/style.scss'
// components
import '../src/components/Footer/style.scss'
import '../src/components/FormBox/style.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext))
})

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default wrapper.withRedux(MyApp)
