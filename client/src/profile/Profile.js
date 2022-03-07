import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
// Components
import UserAvatar from './UserAvatar';

// Redux
import { connect } from 'react-redux';
import { getProfile } from '../actions/getProfileActions';

const Profile = ({ profile: { profile }, getProfile }) => {

  useEffect(async () => {
    await getProfile()

  }, [])

  const { _id, firstName, surName, mobilePhone, adress, city, state, } = profile[0]

  console.log(profile)

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <UserAvatar />
            <span className="font-weight-bold">{firstName}</span></div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">
                my .<small style={{ color: 'green' }}>+app</small> Profile
              </h4>
            </div>
            <div className="col mt-2">
              <div className="col-md-6"><span type="text" >{firstName}</span></div>
              <div className="col-md-6"><span type="text" >{surName}</span></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12"><label style={{ margin: '1rem' }} className="labels">My mobile phone:</label><span> {mobilePhone}</span></div>
              <div className="col-md-12"><label style={{ margin: '1rem' }} className="labels">Address:</label><span> {adress}</span></div>
              <div className="col-md-12"><label style={{ margin: '1rem' }} className="labels">City:</label><span> {city}</span></div>
              <div className="col-md-12"><label style={{ margin: '1rem' }} className="labels">State:</label><span> {state}</span></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <Link to='/payment'>My Paying methods..</Link>
            </div>
            <br />
            <div className="d-flex justify-content-between align-items-center experience">
              <Link to='/settings'>Change profile settings..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfile })(Profile);
