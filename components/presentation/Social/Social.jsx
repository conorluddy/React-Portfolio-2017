/*
  Social
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Social from '../../Social/Social.jsx';
*/

import React from 'react';
import Anime from '../../container/Anime/Anime.jsx';
import BackgroundSvg from '../BackgroundSvg/BackgroundSvg.jsx';

const Social = (props) => {

  const socials = [
    {name: 'Email', href: 'mailto:conorluddy@gmail.com'},
    {name: '500PX', href: 'https://500px.com/luddy'},
    {name: 'Behance', href: 'https://behance.net/luddy'},
    {name: 'Codepen', href: 'https://codepen.io/luddy'},
    {name: 'Dribbble', href: 'https://dribbble.com/ConorLuddy'},
    {name: 'Flickr', href: 'https://flickr.com/photos/conorluddy/albums'},
    {name: 'Github', href: 'https://github.com/conorluddy'},
    {name: 'Instagram', href: 'https://instagram.com/cnrldy'},
    {name: 'LinkedIn', href: 'https://linkedin.com/in/cluddy'},
    {name: 'Medium', href: 'https://medium.com/@madebyluddy'},
    {name: 'Pinterest', href: 'https://www.pinterest.com/madebyluddy'},
    {name: 'Spotify', href: 'https://open.spotify.com/user/1171140582'},
    {name: 'Stack Overflow', href: 'https://stackoverflow.com/users/1039955/conorluddy'},
    {name: 'Steam', href: 'http://steamcommunity.com/id/cluddy/'},
    {name: 'Twitter', href: 'https://twitter.com/madebyluddy'},
    {name: 'Unsplash', href: 'https://unsplash.com/@madebyluddy'},
    {name: 'Vimeo', href: 'https://vimeo.com/unleadedpixel'},
    {name: 'YouTube', href: 'https://www.youtube.com/user/cluddy/videos'}
  ];

  function listEm(soci, ix) {
    const stylz = {
        'transitionDelay': ((socials.length - ix) * 50 + 300) + 'ms' // start from bottom...
    };

    return (
      <li key={ix} style={stylz} >
        <a target='_blank' href={soci.href} title={soci.name} >
          {soci.name}
        </a>
      </li>
    );
  }

  function classNames() {
    return 'cpnt-social ' + (props.showing ? 'is-visible' : 'is-stashed');
  }




  return (
    <div className={classNames()}>

      <span onClick={props.toggleSocialActive} >Contact || Social</span>

      <Anime aniOptions={{
        selector: 'path',
        duration: 1500,
        elasticity: 10,
        easing: 'easeOutCubic'
      }}>
        <BackgroundSvg />
      </Anime>

      <ul>
        {socials.map(listEm)}
      </ul>

      <Anime showing={props.showing} aniOptions={{
        selector: 'path',
        duration: 2000,
        easing: 'easeOutCubic',
        elasticity: 900,
        delay: 500
      }} >
        <svg width="36px" height="36px" viewBox="0 0 36 36" className="close" onClick={props.toggleSocialActive} >
            <g >
              <g className="bg-lines" transform="translate(17.951533, 17.951533) rotate(-315.000000) translate(-17.951533, -17.951533) translate(-12.548467, -8.048467)" stroke="#EEFF00" strokeWidth="4">
                <path d="M0.941281671,2 L59.3649149,2" ></path>
                <path d="M0.941281671,4 L59.3649149,4" ></path>
                <path d="M0.941281671,7 L59.3649149,7" ></path>
                <path d="M0.941281671,10 L59.3649149,10" ></path>
                <path d="M0.941281671,13 L59.3649149,13" ></path>
                <path d="M0.941281671,16 L59.3649149,16" ></path>
                <path d="M0.941281671,19 L59.3649149,19" ></path>
                <path d="M0.941281671,21 L59.3649149,21" ></path>
                <path d="M0.941281671,24 L59.3649149,24" ></path>
                <path d="M59.3381089,27 L0.914475689,27" ></path>
                <path d="M59.3381089,30 L0.914475689,30" ></path>
                <path d="M59.3381089,33 L0.914475689,33" ></path>
                <path d="M59.3381089,36 L0.914475689,36" ></path>
                <path d="M59.3381089,38 L0.914475689,38" ></path>
                <path d="M59.3381089,41 L0.914475689,41" ></path>
                <path d="M59.3381089,44 L0.914475689,44" ></path>
                <path d="M59.3381089,47 L0.914475689,47" ></path>
                <path d="M59.3381089,50 L0.914475689,50" ></path>
              </g>
              <g className="x-paths" transform="translate(10.000000, 10.000000)" stroke="#4A4A4A" strokeWidth="7">
                  <path d="M0,0 L16,16" id="Line"></path>
                  <path d="M16,0 L0,16" id="Line"></path>
              </g>
            </g>
        </svg>
      </Anime>

    </div>
  );
};

//Social.propTypes = { children: React.PropTypes.string };
//Social.defaultProps = { children: 'Hello World!' };

export default Social;
