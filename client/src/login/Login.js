import React, { useState, useEffect } from 'react';

//Redux
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';



const Login = ({ loginUser, user: { error, isAuthenticated } }) => {
  useEffect(() => {

    if (isAuthenticated) {

      // props.history.push('/')
    }


    // eslint-disable-next-line
  }, [error, isAuthenticated])

  const [user, setUser] = useState({
    password: '',
    email: ''
  });

  const { password, email } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    }
    )
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      window.alert('Please enter required fields')
    } else {
      console.log(error)
      await loginUser(user)

      window.alert(` is loggedin`)

      setUser({
        password: '',
        email: ''
      })
    }
  }

  return (
    <div className="form-container">
      <h4
        style={{ border: 'solid 1px black', borderRadius: '4px', margin: '1rem', padding: '1rem' }}
        className='positin-relative'>
        Login to CryPto.<small style={{ color: 'green' }}>+app</small></h4>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-success">Email address</label>
          <input type="email" className="form-control" name='email' placeholder='Enter your email to register...'
            value={email} onChange={onChange} required={true} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-success">Password</label>
          <input type="password" className="form-control" name='password' placeholder='Enter password to register...'
            value={password} onChange={onChange} required={true} />
        </div>
        <button type="submit" className="btn btn-success btn-block">Login</button>
      </form>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser })(Login)
