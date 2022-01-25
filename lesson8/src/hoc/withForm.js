import React from "react"

const withForm = Component => {
  return class extends React.Component {
    state = {
      login: "",
      email: "",
      password: "",
    }

    handleChange = e =>
      this.setState({
        [e.target.name]: e.target.value,
      })

    render() {
      return <Component handelChange={this.handleChange} {...this.state} />
    }
  }
}

export default withForm
