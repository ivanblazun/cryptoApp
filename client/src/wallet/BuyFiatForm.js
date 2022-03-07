
import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { buyFiat } from '../actions/getFiat';
const BuyCurrForm = ({ user: { user }, fiat: { fiat }, buyFiat }) => {

  const [ffiat, setFfiat] = useState({
    name: '',
    value: '',
    type: '',
    date: new Date().toString()
  })

  const { name, value, type } = ffiat

  const onChange = (e) => {
    setFfiat({
      // ...currency,
      // [e.target.name]: e.target.value,
      name: e.target.value,
      value: 0,
      type: 'Fiat',
      date: new Date().toString()
    })
  }

  const onSubmit = (e) => {
    console.log(ffiat);
    e.preventDefault();

    setFfiat({
      name: '',
      value: '',
      type: '',
    })
    buyFiat(ffiat)

    console.log(ffiat)

    window.location.reload(true)
  }

  return (
    <div className="container"
      style={{ background: '#8cc9ed', width: '60%', margin: 'auto' }}
      onSubmit={onSubmit}
    >
      <form className='row'>
        <h1 >Add FIAT currency to wallet list...</h1>
        <div>
          <select className="form-control" style={{ marginTop: '1rem' }}
            name='name' onChange={onChange}
          > <option>choose currency</option>
            <option id='1' value="eur">Euro</option>
            <option id='2' value="usd">USD</option>
          </select>
        </div>
        {fiat.map((f) => f.name === 'eur') && fiat.map((f) => f.name === 'usd') ?
          <button type='submit' className='btn btn-success' style={{ marginTop: '1rem' }}>Add Fiat</button> :
          <button type='submit' className='btn btn-success' disabled style={{ marginTop: '1rem', backgroundColor: 'red' }}>Currently disabled</button>
        }
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user,
  fiat: state.fiat
})

export default connect(mapStateToProps, { buyFiat })(BuyCurrForm);
