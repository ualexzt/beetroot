import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    login: "",
    email: "",
    password: "",
    isToggled: false
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleToggled = e =>
    this.setState({
      isToggled: Boolean(e.target.checked)
    });

  submit = e => {
    e.preventDefault();
    if (this.props.submit) {
      this.props.submit(this.state);
    }
  };

  render() {
    const { login, email, password, isToggled } = this.state;
    return (
      <form onSubmit={this.submit} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Login</label>
          <input
            name="login"
            value={login}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            checked={isToggled}
            onChange={this.handleToggled}
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
            <button className="btn btn-success">Register</button>
          </div>
        )}
      </form>
    );
  }
}

export default RegisterForm;
