import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {onClickedLogout} = this.props
    return (
      <div className="button-container">
        <button className="button" type="button" onClick={onClickedLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
