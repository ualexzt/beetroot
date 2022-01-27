import React, {Component} from "react"

function WithToggle(WrappedComponent) {
  return class extends Component {
    state = {
      isToggled: false,
    }
    handleChange = e => this.setState({isToggled: Boolean(e.target.checked)})

    render() {
      return (
        <WrappedComponent
          {...this.props}
          toggleState={this.state}
          handleToggle={this.handleChange}
        />
      )
    }
  }
}

export default WithToggle
