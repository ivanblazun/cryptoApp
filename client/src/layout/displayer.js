import React from 'react'
import { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getCoins } from '../actions/getCoinsActions';

const Displayer = ({ coin: { coins }, getCoins }) => {

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    getCoins()

    const interval = setInterval(() => setTime(Date.now()), 15000);
    return () => clearInterval(interval);
  }, [])

  const ranNum = Math.floor(Math.random() * 3)

  return (
    <div className="container parent"
      style={{ backgroundColor: '#b5e7f5', border: 'solid 2px #015275', textDecorationStyle: 'solid' }}>
      {/* <h3 className="display-5 move w3-animate-fading">{`${ranNum[0]} is ${ranNum[1].eur} `}
        <span>EUR</span></h3> */}
      {/* <h3 className="display-5 move w3-animate-fading"
        style={{ color: '#01752c' }}
      >{`1 ${(coins[ranNum][0].toUpperCase())}  / ${(coins[ranNum][1].eur.toFixed(2))} `}
        <span>&euro;</span></h3> */}
    </div>
  )
}

const constMapStateToProps = (state) => ({
  coin: state.coin
})

export default connect(constMapStateToProps, { getCoins })(Displayer)
