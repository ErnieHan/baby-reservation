import React from 'react'
import Cookies from 'cookies'
import { END } from 'redux-saga'
import { wrapper } from '../src/store'
import Layout from '../src/containers/Layout'
import MetaHead from '../src/components/MetaHead'
import Main from '../src/containers/Home/Main'

function Index() {
  return (
    <Layout>
      <MetaHead />
      <Main />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { store, req, res } = context
  const cookies = new Cookies(req, res)
  // cookies.set('hk-emphasis-language', req.language)

  store.dispatch(END)

  await store.sagaTask.toPromise()

  return {
    props: {}
  }
})

export default Index
