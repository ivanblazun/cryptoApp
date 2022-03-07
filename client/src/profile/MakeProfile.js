import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createProfile } from '../actions/getProfileActions';

const MakeProfile = ({ profile: { gotProfile }, createProfile }) => {


  const [newProfile, setNewProfile] = useState(
    {
      _id: 1,
      firstName: '',
      surName: '',
      mobilePhone: '',
      adress: '',
      city: '',
      state: ''
    }
  )

  const onChange = (e) => {
    console.log(e.target.value);

    setNewProfile(
      {
        ...newProfile,
        [e.target.name]: e.target.value,
      }
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createProfile(newProfile)

    window.alert(`${newProfile.firstName} you just created your personal profile`)
  }



  return (

    <div className="container rounded bg-white mt-5 mb-5">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Create your personal information profile...</h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label>
                  <input type="text" className="form-control" placeholder="first name" name='firstName' onChange={onChange} />
                </div>
                <div className="col-md-6"><label className="labels">Surname</label>
                  <input type="text" className="form-control" placeholder="surname" name='surName' onChange={onChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Phone Number</label>
                  <input type="text" className="form-control" placeholder="enter phone number" name='mobilePhone' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">Address</label>
                  <input type="text" className="form-control" placeholder="enter address" name='adress' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">State</label>
                  <input type="text" className="form-control" placeholder="enter state" name='state' onChange={onChange} />
                </div>
                <div className="col-md-12"><label className="labels">City</label>
                  <input type="text" className="form-control" placeholder="enter city" name='city' onChange={onChange} />
                </div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-success profile-button" type="submit">Create Profile</button></div>
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

export default connect(mapStateToProps, { createProfile })(MakeProfile);
