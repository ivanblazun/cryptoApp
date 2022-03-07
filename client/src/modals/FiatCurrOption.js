import React, { Fragment } from 'react';



const FiatCurrOption = ({ f }) => {



  return (
    <Fragment >
      <option value={f.name}>{f.name}</option>
    </Fragment>

  )
};

export default FiatCurrOption;
