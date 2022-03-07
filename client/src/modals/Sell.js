import React, { useState, useEffect } from 'react';

// Components
import FiatCurrOption from './FiatCurrOption';

//Redux
import { connect } from 'react-redux';
import { buyCurrency } from '../actions/getCurrencyAction';
import { getCoins } from '../actions/getCoinsActions';
import { updateFiat } from '../actions/getFiat';
import { getFiat } from '../actions/getFiat';


const Buy = ({ showSell, onClose, fiat: { fiat }, coin, c, buyCurrency, getFiat, getCoins, updateFiat }) => {

  const [chosenFiat, setChosenFiat] = useState('eur')

  useEffect(async () => {
    getFiat()
    getCoins()
  }, [])

  // Crypto state

  const [newVal, setNewVal] = useState('')

  const [newCurrVal, setNewCurrVal] = useState({
    id: c._id,
    name: c.name,
    value: newVal,
    type: c.type,
    date: new Date().toString()
  })

  useEffect(() => { sns() }, [newVal])
  const sns = () => setNewCurrVal(
    {
      id: c._id,
      name: c.name,
      value: Number(c.value) - newVal,
      type: c.type,
      date: new Date().toString()
    }
  )

  // Fiat state and filter

  let valSum = coin.map((co) => co).filter((co) => co[0] === c.name).shift(0)[1].eur
  const f = fiat.map((f) => f = f).filter((f) => f.name.toLocaleLowerCase() === chosenFiat)

  const [newFiatVal, setNewFiatVal] = useState({
    id: '',
    name: '',
    value: '',
    date: new Date().toString()
  })

  useEffect(() => { snFs() }, [chosenFiat])
  const snFs = () => setNewFiatVal(
    {
      id: f[0]._id,
      name: f[0].name,
      value: f[0].value + newVal * valSum.toFixed(3),
      date: new Date().toString()
    }
  )

  // Last buying and state
  const buying = async () => {
    await updateFiat(newFiatVal)
    await buyCurrency(newCurrVal)


    window.alert('Currency buyed!!')

    window.location.reload(true)

  }

  if (!showSell) {
    return null
  }
  return (
    <div id="exampleModal" tabIndex="-1" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"
              style={{ color: 'red' }}
            >
              Sell {c.name.charAt(0).toUpperCase() + c.name.slice(1)}...?</h5>
          </div>
          <div className="modal-body">
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>vs_Fiat</th>
                  <th>vs_Fiat stash</th>
                  <th>vs_Fiat value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                  </td>
                  <td>
                    <input type="number"
                      className="form-control"
                      min={1}
                      max={c.value}
                      value={newVal}
                      onChange={(e) => setNewVal(Number(e.target.value))}
                    />
                  </td>
                  <td>
                    <select onChange={(e) => setChosenFiat(e.target.value.toLocaleLowerCase())}>
                      <option disabled>chose Fiat curr</option>
                      {fiat.map((f) => <FiatCurrOption key={f._id} f={f} />)}
                    </select>
                  </td>
                  <td>{ }</td>
                  <td> {newVal === '' ? '' : (newVal * valSum.toFixed(3) + ' EUR')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose} >Close</button>
            <button className="btn btn-primary" onClick={(e) => buying()}>Sell</button>
          </div>
        </div>
      </div>
    </div>);
};

const mapStateToProps = (state) => ({
  fiat: state.fiat,
  coin: state.coin.coins
})

export default connect(mapStateToProps, { buyCurrency, getCoins, updateFiat, getFiat })(Buy);
