import React, {Component} from "react"

function WithForm(WrappedComponent) {
  return class extends Component {
    state = {
      login: "",
      email: "",
      password: "",
    }

    handleChange = e =>
      this.setState({
        [e.target.name]: e.target.value,
      })

    submit = e => {
      e.preventDefault()
      if (this.props.submit) {
        this.props.submit(this.state)
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          formState={this.state}
          handleChange={this.handleChange}
          submit={this.submit}
        />
      )
    }
  }
}

export default WithForm
