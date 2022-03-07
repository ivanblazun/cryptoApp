import React from 'react';
import { Route, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, user: { isAuthenticated }, ...rest }) => {

  return (
    <Route {...rest} render={props => !isAuthenticated ?
      (<Redirect to='/' />)
      :
      (<Component {...props} />)
    } />
  )
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(PrivateRoute);
