import React, {Component} from "react"
import withForm from "../hoc/withForm"

class LoginForm extends Component {
  submit = e => {
    e.preventDefault()
    const {email, password} = this.props
    console.log({email, password})
    if (this.props.submit) {
      this.props.submit(this.state)
    }
  }

  render() {
    const {handelChange, email, password} = this.props
    return (
      <form onSubmit={this.submit} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={handelChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={handelChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary mt-2">Login</button>
        </div>
      </form>
    )
  }
}

export default withForm(LoginForm)
