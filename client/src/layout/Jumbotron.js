import React from 'react'

//Components
import Displayer from './displayer';

const Jumbotron = () => {


  return (
    <div className="container parent">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <Displayer />
          <p className="lead">
            Start your day positive with {' '}
            <span>CryPto.
              <small style={{ color: 'green' }}>+app</small>
            </span>
            {' '}
            solution
          </p>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
