import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { updateProfile } from '../actions/getProfileActions';

// Components
import UploadAvatar from './UploadAvatar';


const ProfileSettings = ({ profile: { profile }, updateProfile }) => {

  const { _id, firstName, surName, mobilePhone, adress, city, state, } = profile

  const [updProfile, setUpdProfile] = useState(
    {
      _id: _id,
      firstName: firstName,
      surName: surName,
      mobilePhone: mobilePhone,
      adress: adress,
      city: city,
      state: state
    }
  )

  const onChange = (e) => {
    console.log(e.target.value);

    setUpdProfile(
      {
        ...updProfile,
        [e.target.name]: e.target.value,
      }
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    updateProfile(updProfile)

    window.alert('Profile updated!')

  }

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <button className='btn btn-md btn-success' style={{ margin: '1rem' }}>
        <Link to='/profile'>
          <i className="fas fa-long-arrow-left"> to profile </i>
        </Link>
      </button>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <h1>Avatar</h1>
              <UploadAvatar />
              <span className="font-weight-bold">{firstName}</span>

            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label>
                  <input type="text" className="form-control" placeholder="first name" defaultValue={firstName} name='firstName' onChange={onChange} />
                </div>
                <div className="col-md-6"><label className="labels">Surname</label>
                  <input type="text" className="form-control" defaultValue={surName} placeholder="surname" name='surName' onChange={onChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Phone Number</label>
                  <input type="text" className="form-control" placeholder="enter phone number" defaultValue={mobilePhone} name='mobilePhone' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">Address</label>
                  <input type="text" className="form-control" placeholder="enter address" defaultValue={adress} name='adress' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">State</label>
                  <input type="text" className="form-control" placeholder="enter state" defaultValue={state} name='state' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">City</label>
                  <input type="text" className="form-control" placeholder="enter city" defaultValue={city} name='city' onChange={onChange} />
                </div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { updateProfile })(ProfileSettings);
