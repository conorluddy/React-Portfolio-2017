/*
  Reader
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Reader from '../../Reader/Reader.jsx';
*/

import React from 'react';
import mMarked from 'meta-marked';
import ScrollPosition from '../ScrollPosition/ScrollPosition.jsx';
import fetchMd from '../../../modules/fetch-md.js';
import Hero from '../../presentation/Hero/Hero.jsx';
import ReaderContent from '../../presentation/ReaderContent/ReaderContent.jsx';
import PageProgress from '../../presentation/PageProgress/PageProgress.jsx';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Loading from '../../presentation/Loading/Loading.jsx';

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
      heroHasLoaded: false,
      isLoading: true
    };

    this.confirmHeroLoaded = this.confirmHeroLoaded.bind(this);
    this.getContent(props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Reader willReceiveProps nextProps: ', nextProps);

    this.getContent(nextProps.location.pathname);


    if (this.props.params.slug !== nextProps.params.slug) {
      this.setState({ isLoading: true,
                      heroHasLoaded: false });
    }
  }

  confirmHeroLoaded() {//io = 1/0 = on/off
    console.info('Hero image/video ready');
    this.setState({heroHasLoaded: true});
  }

  getContent(path) {
    //TODO: improved path generation
    //ToDo: Check if this has already been fetched before... cache etc...
    console.info('Fetching page content...');

    fetchMd('./../content' + path + '.md')
      .then((md) => {
        let metamark = mMarked(md);

        console.info('Fetched');

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
      subtitle = meta.heroSubtitle ? <span className="subtitle">{meta.heroSubtitle}</span> : '';

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

      return <Hero imgSrc={imgSrc} videoSrc={videoSrc} title={title} subtitle={subtitle} modifiers={modifiers} scrollPosition={this.state.scrollPosition} heroHasLoaded={this.state.heroHasLoaded} confirmHeroLoaded={this.confirmHeroLoaded} />;
    }

    return '';
  };

  ifHeroLoading() {
    return this.state.heroHasLoaded ? '' : <Loading />;
  }

  render() {
    return (
      <div className="cpnt-reader" >

        <ScrollPosition getBoundingRect={false} >
          {this.iNeedAHero(this.state.meta)}
        </ScrollPosition>

        {this.ifHeroLoading()}

        <ReaderContent content={this.state.content} isLoading={this.state.isLoading} />

        <ScrollPosition getBoundingRect={false} >
          <PageProgress />
        </ScrollPosition>

      </div>
    );
  }
}

export default Reader;
