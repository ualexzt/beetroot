import React from "react"

const withToggle = Component => {
  return class extends React.Component {
    state = {
      isToggled: false,
    }

    handleToggle = e => {
      this.setState({isToggled: Boolean(e.target.checked)})
    }

    render() {
      return (
        <Component
          isToggled={this.state.isToggled}
          onChange={this.handleToggle}
          {...this.state}
        />
      )
    }
  }
}
export default withToggle
