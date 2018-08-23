import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';
import ExampleWorkBubble from '../js/example-work-bubble';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
  }
]


describe('ExampleWork component', () => {
  let component = shallow(<ExampleWork work={myWork}/>)
  
  it('Should be a "section" element', () => {
    expect(component.type()).toEqual('section');
  });

  it('Should contain as many children as there are work examples', () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

});

describe('ExampleWorkBubble component', () => {
  let component = shallow(<ExampleWorkBubble title={myWork[1].title} image={myWork[1].image} />)
  let images = component.find("img");

  it('Should contain a single "img" element', () => {
    expect(images.length).toEqual(1);
  })

  it('Should have the image src set correctly', () => {
    expect(images.props('src').src).toEqual(myWork[1].image.src);
  })

});