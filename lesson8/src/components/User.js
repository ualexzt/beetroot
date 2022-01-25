import React from "react"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import withToggle from "../hoc/withToggle"

class User extends React.Component {
  submit = value => {
    console.log(value)
  }

  render() {
    const {isToggled, onChange} = this.props

    return (
      <div className="pt-3">
        <div className="form-check">
          <input
            checked={isToggled}
            onChange={onChange}
            type="checkbox"
            name="isRegister"
            id="isRegister"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isRegister">
            Switch to {isToggled ? "Login" : "Register"}
          </label>
        </div>
        <hr />

        <h2>{isToggled ? "Register" : "Login"}</h2>

        {isToggled ? (
          <RegisterForm submit={this.submit} />
        ) : (
          <LoginForm submit={this.submit} />
        )}
      </div>
    )
  }
}
export default withToggle(User)
