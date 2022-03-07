import React, { useState, useEffect } from 'react';

//Redux
import { connect } from 'react-redux';

import { updateFiat } from '../actions/getFiat';


const Buy = ({ showBuy, onClose, f, updateFiat }) => {

  const [newVal, setNewVal] = useState()
  const [newCurrVal, setNewCurrVal] = useState({
    id: f._id,
    name: f.name,
    value: newVal,
    date: new Date().toString()
  })

  useEffect(() => { sns() }, [newVal])
  const sns = () => setNewCurrVal(
    {
      id: f._id,
      name: f.name,
      value: newVal,
      date: new Date().toString()
    }
  )

  if (!showBuy) {
    return null
  }

  return (
    <div id="exampleModal" tabIndex="-1" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"
              style={{ color: 'green' }}
            >
              Buy {f.name.charAt(0).toUpperCase() + f.name.slice(1)}...?</h5>
          </div>
          <div className="modal-body">
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{f.name}</td>

                  <td>
                    <input type="number"
                      className="form-control"
                      onChange={(e) => setNewVal(Number(e.target.value) + Number(f.value))}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose} >Close</button>
            <button className="btn btn-primary" onClick={(e) => updateFiat(newCurrVal)}>Buy</button>
          </div>
        </div>
      </div>
    </div>);
};

const mapStateToProps = (state) => ({

  fiat: state.fiat
})

export default connect(mapStateToProps, { updateFiat })(Buy);
