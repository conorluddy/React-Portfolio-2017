/*
  PageReader component description goes here, please!

  To import this elsewhere:
  import PageReader from '../PageReader/PageReader';
*/

import React from 'react'
import FullHero from '../FullHero/FullHero';

export default class PageReader extends React.Component {
  render() {

    return (
      <div className='cpnt-page-reader' >

        <FullHero imgSrc="assets/images/hero/mockup.jpg" darken="40" >
          <h1>
            <strong className="-white">PRODRIFT ACADEMY</strong>
            <br />
            <span>RESPONSIVE WORDPRESS</span>
          </h1>
        </FullHero>


        <h2 className="title" >
          PRODRIFT ACADEMY
        </h2>


      </div>
    );
  }
}
