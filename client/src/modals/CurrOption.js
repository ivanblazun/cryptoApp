import React, { Fragment } from 'react';

const CurrOption = ({ curr, c }) => {

  return (
    <Fragment>
      <option value="">
        {curr.name}
      </option>
    </Fragment>)
};

export default CurrOption;
