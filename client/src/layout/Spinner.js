import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      <div class="d-flex justify-content-center" style={{ margin: '4rem' }}>
        <strong style={{ marginRight: '2rem' }}>Loading...</strong>
        <div class="spinner-border " role="status">
          {/* <div>
          <span>Loading...</span>
        </div> */}
        </div>
      </div>
    </Fragment>
  )
};

export default Spinner;
