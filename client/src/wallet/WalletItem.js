import React, { useState } from 'react';

// Components
import Buy from '../modals/Buy';
import Sell from '../modals/Sell';
const WalletItem = ({ c }) => {

  const { name, value, date } = c

  const [showBuy, setShowBuy] = useState(false)
  const [showSell, setShowSell] = useState(false)


  return (
    <li className="list-group-item " style={{ margin: '1rem' }}>
      <div className="list-group-item d-flex justify-content-between">
        <div className="">
          <h5 className="mb-1" style={{ color: '#2d3e40', fontSize: '2rem' }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h5>
          <strong >
            Last transaction: {date}
          </strong>
        </div>
        <div style={{ margin: '1rem' }}>
          <strong className="mb-1">
            Value:
          </strong>
        </div>
        <div>
          <h4>
            {value < 1 ?
              <span className='badge bg-danger'>No coins</span> :
              <span className='badge bg-success'>{value}</span>}
          </h4>
        </div>
        {showSell ? '' :
          <button className='btn btn-success btn-sm'
            style={{ margin: '1rem' }}
            onClick={() => setShowBuy(true)}
          >
            Buy
          </button>
        }
        {showBuy || value < 1 ? '' :
          <button onClick={() => setShowSell(true)} className='btn btn-danger btn-sm'
            style={{ margin: '1rem' }}
          >
            Sell
          </button>
        }

        <Sell onClose={() => setShowSell(false)}
          showSell={showSell}
          c={c}
        />

        <Buy onClose={() => setShowBuy(false)}
          showBuy={showBuy}
          c={c}
        />



      </div>
    </li>

  )
};

export default WalletItem;
