/*
  PageReader component description goes here, please!

  To import this elsewhere:
  import PageReader from '../PageReader/PageReader';
*/

import React from 'react'
import FullHero from '../FullHero/FullHero';

import axios from 'axios';
import marked from 'marked';

export default class PageReader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      rawContent: ''
    };

    this.getContent('/content' + props.location.pathname + '.md');

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }

  getContent(contentPath) {
    setTimeout(() => {
      axios.get(contentPath)
        .then(res => {
          this.setState({
            isLoading: false,
            rawContent: res.data
          });
        });
    }, 1000);
  }

  createMarkup() {
    return {__html: marked(this.state.rawContent)};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({isLoading: true});
      this.getContent('/content' + nextProps.location.pathname + '.md');
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  // }

  render() {
    let loader = this.state.isLoading ? <div>LOADING</div> : '';
    // let markedContent = marked(this.state.rawContent);

    return (
      <div className='cpnt-page-reader' >
        {loader}
        <div dangerouslySetInnerHTML={this.createMarkup()} />;
      </div>
    );
  }
}



/*

<FullHero imgSrc="assets/images/hero/mockup.jpg" darken="40" >
  <h1>
    <strong className="-white">PRODRIFT ACADEMY</strong>
    <br />
    <span>RESPONSIVE WORDPRESS</span>
  </h1>
</FullHero>

<div className="grid-row">
  // <AsyncContent contentPath={contentPath} />
</div>

          <h2 className="title" >
            PRODRIFT ACADEMY
          </h2>

          <p>Well, I'm not Thomas Jefferson .... He was a pussy! And people say, 'Oh,
          you know... you have to work through your resentments.' Yeah. No. I'm gonna
          hold on to them and they're gonna fuel my attack. So ... you know ...
          within that is tremendous focus, and tremendous clarity, and tremendous
          peace. But ... whatever. I agreed to do it. There's just one deal point
          that Jim Robinson - a wonderful man at Morgan Creek, a great company - need
          to work out is they want me in it. If they do, it's a smash. If they don't,
          it's a turd that opens on a tugboat.</p>

          <p className="-wide-cols">Let me just say this: It's nothing this side of deplorable, that a
          certain Chaim Levine - yeah, that's Chuck's real name - mistook this rock
          star for his own selfish exit strategy, bro. It's ... yeah ... it's an
          understatement. You know, I just ... I'm sorry, man, I got magic and I got
          poetry in my fingertips. And people say, 'Oh, you know... you have to work
          through your resentments.' Yeah. No. I'm gonna hold on to them and they're
          gonna fuel my attack.  Let me just say this: It's nothing this side of
          deplorable, that a certain Chaim Levine - yeah, that's Chuck's real name -
          mistook this rock star for his own selfish exit strategy, bro.</p>

          <p> But like in baseball, the scoreboard doesn't lie. Never has. So what we
          all have is a marriage of the heart ... of the hearts. 100%. You know,
          here's your first pee test. Next one goes in your mouth. But I dare anyone
          to debate me on things. And one of those stupid mottoes, Alex, is 'Don't be
          special. Be one of us.' News flash! I am special, and I'll never be one of
          you! ... There it is.</p>

          <p>Yeah, but I can't use the word 'sober' because that's a term from 'those
          people', and I have cleansed myself. And if you're a part of my family, I
          will love you violently. If you infiltrate and try to hurt my family, I
          will murder you violently. 'You have the right to kill me, but you do not
          have the right to judge me.' Boom. That's the whole movie. That's life ....
          That's life. There's nobility in that. There's focus. It's genuine. It's
          crystal and it's pure and it's available to everybody.  But ... whatever. I
          agreed to do it. There's just one deal point that Jim Robinson - a
          wonderful man at Morgan Creek, a great company - need to work out is they
          want me in it. If they do, it's a smash. If they don't, it's a turd that
          opens on a tugboat.</p>

          <p>But there's also ... falling from it ... is the apple from The Giving
          Tree. There's my life. Deal with it. Oh, wait! Can't process it. Losers!
          WINNING! B'bye. No, you won't get high .... It's all good. It's all good,
          guys. Quit panicking. Quit panicking. No panic, no judgment. They will lose
          the rest of their lives as they think about me and my life for the rest of
          their lives. So ... it's ... there's no ... again, bring me a challenge,
          somebody. Bring me a frickin' challenge. Because, you know ... it just
          ain't there. WINNING! Um ... but I'm excited to get back ... to work. Um
          ... and not to completely discount what you just talked about ... It's just
          that if I bring up these ... these turds ... these little losers ...
          there's no reason to then bring them back into the fold, because I have
          real fame, and they have nothing.</p>

          <p>Because I'm just ... um .... I don't know. Why give an interview when
          you can leave a warning, you know?  Well, yeah. But I was gonna tell you,
          I'm tired of being told like, 'Oh, you can't talk about that. You can't
          talk about that.' Bull s.h.i.t. ... uh .... Yeah, I didn't care about that
          vanity card. In fact, I went straight on with that one and just dispelled
          that one.</p>

 */
