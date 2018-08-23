import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

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


describe('ExampleWorkModal component', () => {
  let component = shallow(<ExampleWorkModal example={myWork[1]} open={false}/>);
  let anchors = component.find("a");
  let mockCloseModalFunc = jest.fn();
  let openComponent = shallow(<ExampleWorkModal example={myWork[1]} closeModal={mockCloseModalFunc} open={true}/>);

  it('Should contain a single "a" element', () => {
    expect(anchors.length).toEqual(1);
  });

  it('Should link to our project', () => {
    expect(anchors.prop('href')).toEqual(myWork[1].href);
  })

  it('Should have the modal class set correctly', () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  })

  it('Should call the closeModal function when clicked', () => {
    openComponent.find(".modal__closeButton").simulate('click');
    expect(mockCloseModalFunc).toHaveBeenCalled();
  })

});


// let mockOpenModalfunc = jest.fn();
// let component = shallow(<ExampleWorkBubble example={myWork[1]} openModal={mockOpenModalfunc} />)
// let images = component.find("img");

// it('Should contain a single "img" element', () => {
//   expect(images.length).toEqual(1);
// })

// it('Should have the image src set correctly', () => {
//   expect(images.props('src').src).toEqual(myWork[1].image.src);
// })

// it('Should call the openModal function when clicked', () => {
//   component.find(".section__exampleWrapper").simulate('click');
//   expect(mockOpenModalfunc).toHaveBeenCalled();
// })