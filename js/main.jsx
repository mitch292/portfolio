import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.jsx';
import { flixMix, highlights, study, peddle } from './projectDescriptions.js';

const myWork = [
  {
    title: 'FlixMix',
    image: {
      desc: 'FlixMix',
      src: 'images/flixmix.png',
      comment: ''
    },
    href: 'http://flixmix.andrewmitchell.io',
    projectDescription: flixMix
  },
  {
    title: 'Highlights',
    image: {
      desc: 'Highlights',
      src: 'images/filterhighlights.png',
      comment: ''
    },
    href: 'http://highlights.andrewmitchell.io',
    projectDescription: highlights
  },
  {
    title: 'Stud(y)',
    image: {
      desc: 'Study',
      src: 'images/study.png',
      comment: ''
    },
    href: 'http://study.andrewmitchell.io',
    projectDescription: study
  },
  {
    title: 'Peddle',
    image: {
      desc: 'Peddle',
      src: 'images/peddle.png',
      comment: ''
    },
    href: 'http://justpeddle.com',
    projectDescription: peddle
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));