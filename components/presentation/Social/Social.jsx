/*
  Social
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Social from '../../Social/Social.jsx';
*/

import React from 'react';

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
      {name: 'Steam', href: 'http://steamcommunity.com/id/cluddy/'},
      {name: 'Twitter', href: 'https://twitter.com/madebyluddy'},
      {name: 'Unsplash', href: 'https://unsplash.com/@madebyluddy'},
      {name: 'Vimeo', href: 'https://vimeo.com/unleadedpixel'},
      {name: 'YouTube', href: 'https://www.youtube.com/user/cluddy/videos'}
    ];

  function listEm(soci, ix) {
    const stylz = {
        'transition-delay': ((socials.length - ix) * 50) + 'ms' // start from bottom...
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

      <ul>
        {socials.map(listEm)}
      </ul>

    </div>
  );
};

//Social.propTypes = { children: React.PropTypes.string };
//Social.defaultProps = { children: 'Hello World!' };

export default Social;
