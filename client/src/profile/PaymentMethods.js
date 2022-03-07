import React from 'react';
import { Link } from 'react-router-dom';

const PaymentMethods = () => {
  return (
    <div className="container">
      <button className='btn btn-md btn-success' style={{ margin: '1rem' }}>
        <Link to='/profile'>
          <i class="fas fa-long-arrow-left"> to profile </i>
        </Link>
      </button>
      <div>
        Payment methods
      </div>

    </div>
  )
};

export default PaymentMethods;
