import { Button, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, TagsOutlined } from '@ant-design/icons'
import './Navbar.scss'

export const Navbar = () => {
  const size = 'large'
  return (
    <nav className="navbar">
      <ul className="mainMenu">
        <li>
          <Link to="/">
            <Button size={size} shape="circle" icon={<HomeOutlined />} />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Button size={size} shape="circle" icon={<TagsOutlined />} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
