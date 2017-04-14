/*
  Reader
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Reader from '../../Reader/Reader.jsx';
*/

import React from 'react';
import mMarked from 'meta-marked';
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
  }

  componentDidMount() {
    this.setState({intrvl: setInterval( this.updateProgress.bind(this), 1000/10 ) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intrvl);
  }

  componentWillReceiveProps(nextProps) {
    //TODO: improved path generation
    //ToDo: Check if this has already been fetched before... cache etc...
    fetchMd('./../content' + nextProps.location.pathname + '.md')
      .then((md) => {

        console.log('Got MD');

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

    if (meta && (meta.heroImage || meta.heroVideo)) {

      title = meta.heroTitle ? <strong className="-white">{meta.heroTitle}</strong> : '';
      subtitle = meta.heroSubtitle ? <span>{meta.heroSubtitle}</span> : '';
      imgSrc = meta.heroImage ? "assets/images/hero/" + meta.heroImage : false;
      videoSrc = meta.heroVideo ? "./../assets/video/" + meta.heroVideo : false;

      return <Hero imgSrc={imgSrc} videoSrc={videoSrc} title={title} subtitle={subtitle} darken="40" />;
    }

    return '';
  }



  updateProgress() {
    let progress = Math.round( this.getScrollPos() );
    this.setState({ scrollProgress: progress });
  }

  getScrollPos() {
    return ((window.scrollY + window.innerHeight) / window.document.documentElement.clientHeight) * 100;
  }


  render() {
    let barPosition = this.state.scrollProgress - 100;
    let translateX = 'translateX(' + barPosition + '%)';

    return (
      <div className="cpnt-reader">

        {this.iNeedAHero(this.state.meta)}

        <ReaderContent content={this.state.content} />

        <PageProgress translateX={translateX} scrollProgress={this.state.scrollProgress} />

      </div>
    );
  }
}

export default Reader;