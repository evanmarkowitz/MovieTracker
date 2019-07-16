import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../apiCalls';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            error: '',
            user: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let options =  {email: this.state.email, password: this.state.password}
        try {
          let user = await userLogin('http://localhost:3000/api/users', options)
          await this.setState({ user: user.data })
          this.setState({ isLoggedIn: true })
        } catch(error) {
          this.setState({error: error.message})
        }

    }

    render() {
        return (
            <>
                <h2>Log Into Your Account :)</h2>
                <form>
                    <label htmlFor="email-input">Email:</label>
                    <input type="text" placeholder="Email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <label htmlFor="password-input">Password:</label>
                    <input type="text" placeholder="Password"
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ( {
    handleSubmit: () => dispatch( this.setState(this.state.isLoggedIn) )
  } )
  const mapStateToProps = ( state ) => ( {
    isLoggedIn: state.isLoggedIn
  } )
export default connect( mapStateToProps, mapDispatchToProps )( LoginForm )