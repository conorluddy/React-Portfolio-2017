// /*
//   Reader
//   Stateless Presentation Component
//
//   Component description...
//
//   To import this elsewhere (directory nesting level may vary):
//   import Reader from '../../Reader/Reader.jsx';
// */
//
// import React from 'react';
//
// const Reader = ({meta, content}) => {
//
//   /**
//    * iNeedAHero
//    * If there's hero meta, generate and return a hero.
//    */
//   function iNeedAHero() {
//     let heroTitle;
//     let heroSubtitle;
//     let heroSrc;
//
//     if (meta && meta.heroFileName) {
//       heroTitle = meta.heroTitle ? <strong className="-white">{meta.heroTitle}</strong> : '';
//       heroSubtitle = meta.heroSubtitle ? <span>{meta.heroSubtitle}</span> : '';
//       heroSrc = "assets/images/hero/" + meta.heroFileName;
//
//       return <FullHero imgSrc={heroSrc} darken="40" ><h1>{heroTitle}<br />{heroSubtitle}</h1></FullHero>;
//     }
//     return '';
//   }
//
//   function createMarkup() {
//     return {__html: content};
//   }
//
//   return (
//     <div className="cpnt-reader">
//
//       {iNeedAHero()}
//       <div className='grid-row main-content' dangerouslySetInnerHTML={createMarkup()} />
//
//     </div>
//   )
// };
//
// //Reader.propTypes = { children: React.PropTypes.string };
// //Reader.defaultProps = { children: 'Hello World!' };
//
// export default Reader;
