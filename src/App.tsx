import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import { Navbar } from './components/Navbar/Navbar'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import './App.scss'
import './styles/global.scss'

export default function App() {
  return (
    <Router>
      <div className="navbarContainer">
        <Navbar />

        <div className="viewContainer">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
