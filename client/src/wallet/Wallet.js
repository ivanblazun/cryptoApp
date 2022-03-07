import React, { Fragment, useEffect } from 'react';

// Components
import WalletItem from './WalletItem';
import BuyCurrForm from './BuyCurrForm';
import Spinner from '../layout/Spinner';
import FiatCurrency from './FiatCurrency';
import BuyFiatForm from './BuyFiatForm';



//Redux
import { connect } from 'react-redux';
import { getCoins } from '../actions/getCoinsActions';
import { getCurrencys } from '../actions/getCurrencyAction';
import { getFiat } from '../actions/getFiat';

const Wallet = ({
  currencys: { currencys },
  coin: { coins },
  user: { user },
  fiat: { fiat },
  getCoins,
  getCurrencys,
  getFiat
}) => {
  useEffect(() => {
    getFiat()
    getCoins()
    getCurrencys(user)
  }, [])


  const noCurr = <Fragment>
    <li className='list-group-item' style={{ margin: '1rem' }}>
      <strong>
        No currs in pocket...Yet..Buy one..?
      </strong>
    </li>
  </Fragment>


  return (
    <div className='container'>
      <div>
        <h3>Fiat currencys</h3>
        {fiat.map((f) => <FiatCurrency key={f._id} f={f} />)}
      </div>
      <BuyFiatForm />
      <hr />
      <div>
        <h3>Crypto currencys</h3>
        {/* <Spinner /> */}
        <ul className='list-group'>
          {currencys === [] ? noCurr :
            (currencys.map((c) => <WalletItem key={c._id} c={c} />))}
        </ul>
        <BuyCurrForm />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currencys: state.currencys,
  coin: state.coin,
  user: state.user,
  fiat: state.fiat
})

export default connect(mapStateToProps, { getCoins, getCurrencys, getFiat })(Wallet);
