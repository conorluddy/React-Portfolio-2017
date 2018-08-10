/*
  ThreeWrap
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ThreeWrap from '../../ThreeWrap/ThreeWrap.jsx';
*/

import React from 'react';

// import * as THREE from 'three';
import {
  Scene,
  OrthographicCamera,
  AmbientLight,
  TextureLoader,
  MeshLambertMaterial,
  PlaneGeometry,
  WebGLRenderer,
  Mesh,
  OrbitControls
} from 'three';

import {
  EffectComposer,
  GlitchPass,
  RenderPass
} from "postprocessing";


class ThreeWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  textureLoaded() {
    console.log('textureLoaded');
    if (this.props.hasLoaded) {
      this.props.hasLoaded();
    }
  }

  textureLoadProgress(xhr) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  }

  componentDidMount() {

    const scene = new Scene();
    const camera = new OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
    const light = new AmbientLight( 0xffffff );
		const textureLoader = new TextureLoader();
    const geometry = new PlaneGeometry( 1920, 1280 );
    const renderer = new WebGLRenderer();
    const imgTexture = textureLoader.load( this.props.img, this.textureLoaded.bind(this), this.textureLoadProgress.bind(this));
    const imgMaterial = new MeshLambertMaterial( { map: imgTexture } );
    const mesh = new Mesh( geometry, imgMaterial );

    this.el.appendChild( renderer.domElement );

		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

    camera.position.z = 650;

    scene.add( light );
    scene.add( mesh );

		const composer = new EffectComposer( renderer );
    const glitchPass = new GlitchPass();

    glitchPass.renderToScreen = true;

    composer.addPass( new RenderPass( scene, camera ) );
    composer.addPass( glitchPass );

    function animate() {
    	requestAnimationFrame( animate );
      composer.render();
    }
    animate();

  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="cpnt-threewrap" ref={(el) => {this.el = el;}} />
    );
  }

}

export default ThreeWrap;

// {this.props.children}
