import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import { loadUser } from '../actions/authActions';


const Register = ({ user: { error, isAuthenticated }, registerUser }) => {

  useEffect(() => {

    if (isAuthenticated) {
      // loadUser()
      // props.history.push('/')
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated])


  const [user, setUser] = useState({
    name: '',
    password: '',
    password2: '',
    email: ''
  });



  const { name, password, password2, email } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    }
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      window.alert('Please enter required fields')
    } else if (password !== password2) {
      window.alert('Passwords does not mach each other')
    } else {
      registerUser(user)


      setUser({
        name: '',
        password: '',
        password2: '',
        email: ''
      })

      window.alert('user registered')
    }

  }

  return (
    <div className="form-container">
      <h4
        style={{ border: 'solid 1px black', borderRadius: '4px', margin: '1rem', padding: '1rem' }}>
        Register to CryPto.<small style={{ color: 'green' }}>+app</small> and start your market chase..!</h4>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-success">User Name</label>
          <input type="text" className="form-control" name='name' placeholder='Enter your disareable User Name...'
            value={name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-success">Email address</label>
          <input type="email" className="form-control" name='email' placeholder='Enter your email to register...'
            value={email} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-success">Password</label>
          <input type="password" className="form-control" name='password' placeholder='Enter password to register...'
            value={password} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label text-success">Confirm password</label>
          <input type="password" className="form-control" name='password2' placeholder='Confirm password to register...'
            value={password2} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { registerUser, loadUser })(Register);
