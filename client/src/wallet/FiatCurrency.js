import React, { useState } from 'react';

// Components
import BuyFiat from '../modals/BuyFiat';

// Redux
import { connect } from 'react-redux';
import { deleteFiat } from '../actions/getFiat';



const FiatCurrency = ({ f, deleteFiat }) => {

  const { _id, name, value, date } = f

  const [showBuy, setShowBuy] = useState(false)

  const removeFiat = (e) => {
    window.alert('Fiat currency withdrowed!')

    deleteFiat(f._id)

    window.location.reload(true)
  }

  return (
    <li className="list-group-item " style={{ margin: '1rem' }}>
      <div className="list-group-item d-flex justify-content-between">
        <div className="">
          <h5 className="mb-1" style={{ color: '#2d3e40', fontSize: '2rem' }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h5>
          <strong >
            Last transaction: {date.toString()}
          </strong>
        </div>
        <div style={{ margin: '1rem' }}>
          <strong className="mb-1">
            Value:
          </strong>
        </div>
        <div>
          <h4>
            <span className='badge bg-success'>{value}</span>
          </h4>
        </div>
        <button className='btn btn-success btn-sm'
          style={{ margin: '1rem' }}
          onClick={() => setShowBuy(true)}
        >
          Buy
        </button>
        <BuyFiat onClose={() => setShowBuy(false)}
          showBuy={showBuy}
          f={f}
        />
        <button className='btn btn-danger btn-sm'
          style={{ margin: '1rem' }}
          onClick={() => removeFiat()}
        >
          Withdrow
        </button>
      </div>
    </li>

  )
};



export default connect(null, { deleteFiat })(FiatCurrency);
