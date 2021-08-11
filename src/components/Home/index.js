import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogged: false}

  onClicked = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout onClickedLogout={this.onClicked} />
          ) : (
            <Login onClickedLogin={this.onClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
