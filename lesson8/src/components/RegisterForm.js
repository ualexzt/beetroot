import React, {Component} from "react"
import withToggle from "../hoc/withToggle"
import withForm from "../hoc/withForm"

class RegisterForm extends Component {
  submit = e => {
    e.preventDefault()
    const {email, password} = this.props
    console.log(email, password)
    if (this.props.submit) {
      this.props.submit(this.state)
    }
  }

  render() {
    const {isToggled, onChange, login, email, password, handleChange} =
      this.props
    return (
      <form onSubmit={this.submit} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Login</label>
          <input
            name="login"
            value={login}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            checked={isToggled}
            onChange={onChange}
            type="checkbox"
            name="isAgree"
            id="isAgree"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isAgree">
            I Agree
          </label>
        </div>

        {isToggled && (
          <div className="form-group">
            <button className="btn btn-success my-2">Register</button>
          </div>
        )}
      </form>
    )
  }
}

export default withForm(withToggle(RegisterForm))
