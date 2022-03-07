import React from 'react'
import { useEffect } from 'react';


// Redux
import { connect } from 'react-redux';
import { getCoins } from '../actions/getCoinsActions';


// Components
import ListItem from './ListItem';
import OldListItem from './OldListItem'
import AddCoinToList from './AddCoinToList';

//

const List = ({ coin: { coins }, getCoins }) => {

  useEffect(() => {
    getCoins();

  }, [])

  return (
    <div className="container">
      <AddCoinToList />
      <table className='table'>
        <thead>
          <tr>
            <th style={{ fontSize: '1.3rem', color: 'grey' }}>this moment value</th>
            <th scope="col">Currency</th>
            <th scope="col">VS_currency</th>
            <th scope="col">Value</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {!coins ? '' : coins.map((c, index) => <ListItem key={index} c={c} />)}
        </tbody>
        <tfoot>
          {/* <td style={{ fontSize: '1.3rem', color: 'grey' }}>yesterday value</td>
          {coins.map((c, index) => <OldListItem key={index} c={c} />)} */}

        </tfoot>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th style={{ fontSize: '1.3rem', color: 'grey' }}>yesterday value</th>
            <th scope="col">Currency</th>
            <th scope="col">VS_currency</th>
            <th scope="col">Value</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        <tbody>

          {/* <td style={{ fontSize: '1.3rem', color: 'grey' }}>yesterday value</td> */}
          {coins.map((c, index) => <OldListItem key={index} c={c} />)}
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  coin: state.coin,

})

export default connect(mapStateToProps, { getCoins })(List)
