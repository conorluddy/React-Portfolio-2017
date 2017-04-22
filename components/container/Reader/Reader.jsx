/*
  Reader
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Reader from '../../Reader/Reader.jsx';
*/

import React from 'react';
import mMarked from 'meta-marked';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
      content: '',
      scrollProgress: 0,
      intrvl: null
    };

    this.getContent(props.location.pathname);
  }

  componentDidMount() {
    //No interval until content stops updating!
    // this.setState({
    //   intrvl: setInterval(this.updateProgress.bind(this), 1000/40)
    // });
  }

  componentWillUnmount() {
    clearInterval(this.state.intrvl);
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


  getScrollPos() {
    let scroll = window.scrollY;
    let windowHeight = window.innerHeight;
    let docHeight = window.document.documentElement.clientHeight;
    return (scroll / (docHeight - windowHeight)) * 100;
  }


  updateProgress() {
    let progress = Math.floor( this.getScrollPos() );
    let position = Math.floor( window.scrollY );

    this.setState({
      scrollProgress: progress,
      scrollPosition: position
    });
  }


  render() {
    let barPosition = this.state.scrollProgress - 100;
    let translateX = 'translateX(' + barPosition + '%)';

    // console.log('READER RENDER');

    return (
      <div className="cpnt-reader">

        <CSSTransitionGroup transitionName="hero" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {this.iNeedAHero(this.state.meta)}
        </CSSTransitionGroup>


        //this is updating with setinterval. fix
        <ReaderContent content={this.state.content} />

        <PageProgress translateX={translateX} scrollProgress={this.state.scrollProgress} />

      </div>
    );
  }
}

export default Reader;
