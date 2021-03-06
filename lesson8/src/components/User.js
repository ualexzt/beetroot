import React from "react"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import WithToggle from "../hocs/withToggle"

class User extends React.Component {
  submit = value => {
    console.log(value)
  }

  render() {
    const {isToggled: isRegister} = this.props.toggleState
    const {handleToggle} = this.props

    return (
      <div className="pt-3">
        <div className="form-check">
          <input
            checked={isRegister}
            onChange={handleToggle}
            type="checkbox"
            name="isRegister"
            id="isRegister"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isRegister">
            Switch to {isRegister ? "Login" : "Register"}
          </label>
        </div>
        <hr />

        <h2>{isRegister ? "Register" : "Login"}</h2>

        {isRegister ? (
          <RegisterForm submit={this.submit} />
        ) : (
          <LoginForm submit={this.submit} />
        )}
      </div>
    )
  }
}

export default WithToggle(User)
