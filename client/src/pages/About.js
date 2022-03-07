import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h1> About CryPto.<small style={{ color: 'green' }}>+app</small></h1>
      <p style={{ margin: '2rem' }}>
        App is for learning usage and currently still under development.

        You can register, login, logout, watch realtime crypto currency prices,
        create your profile (currently without avatar), change profile, manage your
        wallet ("virtually" add FIAT currency, add and remove crypto currencys although still with issues!).
        <br />
        Your acc is saved on mongoDb and jwt protected!
        <hr />
        Server side and auth of app is originaly by Brad Traversy but it is refactored for app needs.

        Manly focus was on Redux, React, and api routes that hits GeckoCoin.com free api-s.
        <br />
        Also CSS part is undefined for most of components as the plan was to finish it last.
        <br />
        React, mongoose, jwt, redux, express, bootstrap and many more fun stuff,..
        <br />
        <hr />
        <strong>Still many problems but problems are to solve,..
          <br />
          Hopeing to find more time to finish it 		&#128515; ...</strong>
      </p>
      <hr />

      <small>2022 by Ivan Blažun</small>
    </div>
  );
};

export default About;
