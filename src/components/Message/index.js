import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isLogged} = this.props
    if (isLogged) {
      return <h1 className="heading">Welcome User</h1>
    }
    return <h1 className="heading">Please Login</h1>
  }
}

export default Message
