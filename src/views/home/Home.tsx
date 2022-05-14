import { useEffect, useState, FC } from 'react'
import { Row, Col } from 'antd'
import { HomeNotes } from './components/HomeNotes'

const Home: FC = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <h1>Home</h1>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <HomeNotes />
      </Col>
    </Row>
  )
}

export default Home
