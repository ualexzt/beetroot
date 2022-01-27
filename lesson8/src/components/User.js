import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

class  User extends React.Component {
    state = {
        isRegister: false
    }
    handleChange = e => this.setState({isRegister: Boolean(e.target.checked)})

    submit = value => {
        console.log(value)
    }

    render(){
      const {isRegister} = this.state
    
      return (
        <div className="pt-3">
            <div className="form-check">
               <input checked={isRegister} onChange={this.handleChange} 
                type="checkbox"  name="isRegister" id="isRegister"  className="form-check-input" 
                />
                <label className="form-check-label" htmlFor="isRegister">Switch to {isRegister ? 'Login': 'Register'}</label>
            </div>
            <hr />

           <h2>{isRegister ? 'Register': 'Login'}</h2>
          
           {isRegister ? <RegisterForm submit={this.submit} /> : <LoginForm submit={this.submit} />}
        </div>
    )
    }
}
export default User; 