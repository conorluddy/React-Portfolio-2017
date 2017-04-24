/*
  Reader
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Reader from '../../Reader/Reader.jsx';
*/

import React from 'react';
import mMarked from 'meta-marked';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ScrollPosition from '../ScrollPosition/ScrollPosition.jsx';
import fetchMd from '../../../modules/fetch-md.js';
import Hero from '../../presentation/Hero/Hero.jsx';
import ReaderContent from '../../presentation/ReaderContent/ReaderContent.jsx';
import PageProgress from '../../presentation/PageProgress/PageProgress.jsx';

mMarked.setOptions({
  renderer: new mMarked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

class Reader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.getContent(props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps.location.pathname);
  }


  getContent(path) {
    //TODO: improved path generation
    //ToDo: Check if this has already been fetched before... cache etc...
    console.info('Fetching page content...');

    fetchMd('./../content' + path + '.md')
      .then((md) => {
        let metamark = mMarked(md);
        this.setState({
          isLoading: false,
          content: metamark.html,
          meta: metamark.meta,
          md: md
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }


  /**
   * iNeedAHero
   * If there's hero meta, generate and return a hero.
   */
  iNeedAHero(meta) {
    let title;
    let subtitle;
    let imgSrc;
    let videoSrc;
    let modifiers = {};

    if (meta && (meta.heroImage || meta.heroVideo)) {

      title = meta.heroTitle ? <strong className="-white">{meta.heroTitle}</strong> : '';
      subtitle = meta.heroSubtitle ? <span>{meta.heroSubtitle}</span> : '';

      imgSrc = meta.heroImage ? meta.heroImage : false;
      videoSrc = meta.heroVideo ? meta.heroVideo : false;

      if (meta.heroHeight === 'one-third') {
        modifiers.height = '33vh';
      }

      if (meta.heroHeight === 'half') {
        modifiers.height = '50vh';
      }

      if (meta.heroHeight === 'two-thirds') {
        modifiers.height = '66vh';
      }

      if (meta.heroDarken) {
        modifiers.heroDarken = meta.heroDarken;
      }

      return <Hero imgSrc={imgSrc} videoSrc={videoSrc} title={title} subtitle={subtitle} modifiers={modifiers} scrollPosition={this.state.scrollPosition} />;
    }

    return '';
  }

  render() {

    return (
      <div className="cpnt-reader">

        <ScrollPosition>
          {this.iNeedAHero(this.state.meta)}
        </ScrollPosition>

        <ReaderContent content={this.state.content} />

        <ScrollPosition>
          <PageProgress />
        </ScrollPosition>

      </div>
    );
  }
}

export default Reader;
