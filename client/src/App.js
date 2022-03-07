
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// // Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './layout/Navbar'
import List from './list/List'
import Jumbotron from './layout/Jumbotron';
import About from './pages/About';
import Register from './register/Register';
import Login from './login/Login';
import Logout from './login/Logout';
import Wallet from './wallet/Wallet';
import Profile from './profile/Profile';
import PaymentMethods from './profile/PaymentMethods';
import ProfileSettings from './profile/ProfileSettings';
import MakeProfile from './profile/MakeProfile';

// Private Route
import PrivateRoute from './routing/PrivateRoute';
// setAuthToken
import setAuthToken from './utils/setAuthToken';


const App = () => {

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <div className="container">
          </div>
          <Switch>
            <PrivateRoute exact path='/list' component={List} />
            <PrivateRoute exact path='/wallet' component={Wallet} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/payment' component={PaymentMethods} />
            <PrivateRoute exact path='/settings' component={ProfileSettings} />
            <PrivateRoute exact path='/makeprofile' component={MakeProfile} />
            <Route exact path='/'><Jumbotron /></Route>
            <Route exact path='/register'><Register /></Route>
            <Route exact path='/login'><Login /></Route>
            <PrivateRoute exact path='/logout'><Logout /></PrivateRoute>
            <Route exact path='/about'><About /></Route>
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}


export default App
