import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.jsx';

const myWork = [
  {
    title: 'FlixMix',
    image: {
      desc: 'FlixMix',
      src: 'images/flixmix.png',
      comment: ''
    },
    href: 'http://flixmix.andrewmitchell.io',
    projectDescription: 'pending'
  },
  {
    title: 'Highlights',
    image: {
      desc: 'Highlights',
      src: 'images/filterhighlights.png',
      comment: ''
    },
    href: 'http://highlights.andrewmitchell.io',
    projectDescription: 'pending'
  },
  {
    title: 'Stud(y)',
    image: {
      desc: 'Study',
      src: 'images/study.png',
      comment: ''
    },
    href: 'http://study.andrewmitchell.io',
    projectDescription: 'pending'
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));