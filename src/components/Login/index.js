import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {onClickedLogin} = this.props
    return (
      <div className="button-container">
        <button className="button" type="button" onClick={onClickedLogin}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
