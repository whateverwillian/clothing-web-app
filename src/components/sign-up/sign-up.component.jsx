import React from 'react';

import CustomButton from '../custom-button/custom-buttom.component';
import FormInput from '../form-input/form-input.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, passwordConfirm } = this.state;
    
    if (password !== passwordConfirm) {
      alert("Passwords don't match");

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, passwordConfirm } = this.state;

    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your e-mail and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='E-mail'
            required
          />
          
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />  

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;