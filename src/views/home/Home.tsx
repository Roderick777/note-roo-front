import { useEffect, useState, FC } from 'react'
import { Row, Col } from 'antd'
import { HomeNotes } from './components/HomeNotes'
import { PageTitle } from '../../components/PageTitle/PageTitle'

const Home: FC = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <PageTitle>Home</PageTitle>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <HomeNotes />
      </Col>
    </Row>
  )
}

export default Home
