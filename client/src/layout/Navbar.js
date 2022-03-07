import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'

// Redux
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import { getProfile } from '../actions/getProfileActions'


const Navbar = ({ user: { user, error, isAuthenticated }, profile: { profile, gotProfile }, getProfile, logout }) => {

  useEffect(() => {


    getProfile()


  }, [isAuthenticated])

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link active" to="/list">
          <i className='fas fa-list'> List</i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/wallet" style={{ color: '#32a8a8' }}>
          <i className='fas fa-wallet'> Wallet</i>
        </Link>
      </li>
      {profile.length === 0 ?
        <li className="nav-item">
          <Link className="nav-link" to="/makeprofile" style={{ color: 'blue' }}>
            <i className='fas fa-user'>Create Profile !</i>
          </Link>
        </li> :
        <li className="nav-item">
          <Link className="nav-link" to="/profile" style={{ color: 'green' }}>
            <i className='fas fa-user'> Profile</i>
          </Link>
        </li>
      }
      <li className="nav-item">
        <a href='#!' onClick={e => logout()} className="nav-link" to="/logout" style={{ color: 'red' }}>
          <i className="fas fa-sign-out-alt"> Logout</i>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/register" style={{ color: 'purple' }}>
          <i className="fas fa-registered"> Register</i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login" style={{ color: 'green' }}>
          <i className="fas fa-sign-in-alt"> Login</i>
        </Link>
      </li>
    </Fragment>
  )
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h1>CryPto.<small style={{ color: 'green' }}>+app</small></h1></a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{ margin: 'auto' }}>
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0" style={{ border: 'solid grey 1px', borderRadius: '4px' }}>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <i className='fas fa-home'> Home</i>
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'grey' }}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile
})

export default connect(mapStateToProps, { logout, getProfile })(Navbar)
