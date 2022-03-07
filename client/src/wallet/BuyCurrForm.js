
import React, { useState } from 'react';


// Redux
import { connect } from 'react-redux';
import { addCurrency } from '../actions/getCurrencyAction';

const BuyCurrForm = ({ user: { user }, addCurrency }) => {

  const [currency, setCurrency] = useState({
    name: '',
    value: '',
    type: '',
    date: new Date().toString()
  })

  const { name, value, type } = currency

  const onChange = (e) => {
    console.log(e.target.value);

    setCurrency({
      // ...currency,
      // [e.target.name]: e.target.value,
      name: e.target.value,
      value: 0,
      type: 'crypto',
      date: new Date().toString()
    })
  }

  const onSubmit = (e) => {
    console.log(currency);
    e.preventDefault();

    setCurrency({
      name: '',
      value: '',
      type: '',
    })
    addCurrency(currency)

    window.location.reload(true)
  }

  return (
    <div className="container"
      style={{ background: '#a1edc8', width: '60%', margin: 'auto' }}
      onSubmit={onSubmit}
    >
      <form className='row'>
        <h1 >Add crypto currency to wallet list...</h1>
        <div>
          <select className="form-control" style={{ marginTop: '1rem' }}
            name='name' onChange={onChange}
          > <option disabled selected >choose currency</option>
            <option id='1' value="dogecoin">DogeCoin</option>
            <option id='2' value="stellar">Stellar</option>
            <option id='3' value="binancecoin">Binance Coin</option>
            <option id='4' value="monero">Monero</option>
            <option id='5' value="tether">Tether</option>
            <option id='6' value="binancecoin">Binance Coin</option>
            <option id='7' value="bitcoin">BitCoin</option>
            <option id='8' value="ethereum">Ethereum</option>
            <option id='9' value="cardano">Cardano</option>
          </select>
        </div>
        <button type='submit' className='btn btn-success' style={{ marginTop: '1rem' }}>Add currency</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { addCurrency })(BuyCurrForm);
