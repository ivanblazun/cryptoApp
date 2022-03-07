import React, { useState } from 'react';

//Redux
import { connect } from 'react-redux';
import { addCoin } from '../actions/getCoinsActions'

const AddCoinToList = ({ addCoin }) => {

  const [selected, setSelected] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    addCoin(selected);

  }

  const onChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="container" style={{ margin: '1rem' }}>
      <form onSubmit={onSubmit} className='row-g-2'>
        <select className="form-select" onChange={onChange}>
          <option disabled selected>Add new currency to list..</option>
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
        <div className="col-auto">
          <button style={{ margin: '1rem' }}
            type="submit"
            className="btn btn-success">
            Add currency to list
          </button>
        </div>
      </form>
    </div >
  );
};

export default connect(null, { addCoin })(AddCoinToList)