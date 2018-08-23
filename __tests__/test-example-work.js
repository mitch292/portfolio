import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';
import ExampleWorkBubble from '../js/example-work-bubble';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
  }
]


describe('ExampleWork component', () => {
  let component = shallow(<ExampleWork work={myWork}/>)
  
  it('Should be a "section" element', () => {
    expect(component.type()).toEqual('div');
  });

  it('Should contain as many children as there are work examples', () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });


  it('Should allow the modal to open and close', () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  })

});

describe('ExampleWorkBubble component', () => {
  let mockOpenModalFunc = jest.fn();
  let component = shallow(<ExampleWorkBubble example={myWork[1]} openModal={mockOpenModalFunc} />)
  let images = component.find("img");

  it('Should contain a single "img" element', () => {
    expect(images.length).toEqual(1);
  })

  it('Should have the image src set correctly', () => {
    expect(images.props('src').src).toEqual(myWork[1].image.src);
  })

  it('Should call the openModal function when clicked', () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFunc).toHaveBeenCalled();
  })

});