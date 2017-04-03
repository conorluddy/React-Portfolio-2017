/*
  PageReader component description goes here, please!

  To import this elsewhere:
  import PageReader from '../PageReader/PageReader';
*/

import React from 'react'
import FullHero from '../FullHero/FullHero';
import ReadProgress from '../ReadProgress/ReadProgress';
import LoadingStatus from '../LoadingStatus/LoadingStatus';

import axios from 'axios';
// import marked from 'marked';
import mMarked from 'meta-marked';

export default class PageReader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.getMdFileViaXHR('/content' + props.location.pathname + '.md');

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
  }

  getMdFileViaXHR(contentPath) {
    setTimeout(() => {
      axios.get(contentPath)
        .then(res => {
          let metamark = mMarked(res.data);
          this.setState({
            isLoading: false,
            content: metamark.html,
            meta: metamark.meta
          });
        });
    }, 300);
  }

  createMarkup() {
    return {__html: this.state.content};
  }

  /**
   * iNeedAHero
   * If there's hero meta, generate and return a hero.
   */
  iNeedAHero() {
    let heroTitle;
    let heroSubtitle;
    let heroSrc;

    if (this.state.meta && this.state.meta.heroFileName) {
      heroTitle = this.state.meta.heroTitle ? <strong className="-white">{this.state.meta.heroTitle}</strong> : '';
      heroSubtitle = this.state.meta.heroSubtitle ? <span>{this.state.meta.heroSubtitle}</span> : '';
      heroSrc = "assets/images/hero/" + this.state.meta.heroFileName;

      return <FullHero imgSrc={heroSrc} darken="40" ><h1>{heroTitle}<br />{heroSubtitle}</h1></FullHero>;
    }
    return '';
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({isLoading: true});
      this.getMdFileViaXHR('/content' + nextProps.location.pathname + '.md'); // TODO: CDN for content...?
    }
  }

  render() {

    return (
      <div className='cpnt-page-reader' >

        {this.iNeedAHero()}

        <div dangerouslySetInnerHTML={this.createMarkup()} />

        <ReadProgress />

        <LoadingStatus isLoading={this.state.isLoading} />
      </div>
    );
  }
}
