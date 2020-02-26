import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { Profile } from '../components/Profile'
import { Works } from '../components/Works'
import { Activities } from '../components/Activities'

const Index: React.FC = () => {
  return (
    <>
      <Head title="saitoeku3.dev" description="" />
      <Layout>
        <Hero />
        <Profile />
        <Works />
        <Activities />
      </Layout>
    </>
  )
}

export default Index
