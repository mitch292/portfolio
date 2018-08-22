import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.jsx';

const myWork = [
  {
    title: "FlixMix",
    image: {
      desc: "FlixMix",
      src: "images/flixmix.png",
      comment: ""
    }
  },
  {
    title: "Highlights",
    image: {
      desc: "Highlights",
      src: "images/filterhighlights.png",
      comment: ""
    }
  },
  {
    title: "Stud(y)",
    image: {
      desc: "Study",
      src: "images/study.png",
      comment: ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById("example-work"));