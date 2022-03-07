import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ListItem = ({ c }) => {

  useEffect(() => {
    getOldCoins()
  }, [])

  const [oldVal, setOldVal] = useState()


  const delItem = (e) => {
    console.log(e.target);
    e.target.parentElement.parentElement.parentElement.remove()
  }

  const val = c.map((c) => c.eur).filter((c) => c !== undefined)

  const curr = c.map((c) => c).filter((c) => typeof c === 'string')

  const d = new Date()
  const yesterday = d.getDate() - 1

  const month = d.getMonth() + 1

  const year = d.getFullYear()

  const getOldCoins = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${curr}/history?date=${yesterday}-${month}-${year}`)
    let oV = await res.data.market_data.current_price.eur

    oV = oV.toFixed(2)

    setOldVal(oV)
  }

  const green = val < oldVal

  return (
    <tr>
      <th scope="row"></th>
      <td>{curr}</td>
      <td>Euro</td>
      <td style={green ?
        { color: 'red' } :
        { color: 'green' }}>
        {green ? `- ${val}` : `+ ${val}`}
      </td>
      <td><a href="#" onClick={delItem}><i className='fa fa-trash'></i></a></td>
    </tr>
  )
}



export default ListItem
