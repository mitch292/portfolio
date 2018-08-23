import React from 'react';

const ExampleWorkBubble = (props) => (
    <div className="section__exampleWrapper"
      onClick={(event)=>props.openModal(event, props.example)}
    >
    <div className="section__example">
      <img alt={props.example.image.desc}
           className="section__exampleImage"
           src={props.example.image.src}/>
      <dl className="color--cloud">
        <dt className="section__exampleTitle section__text--centered">
          {props.example.title}
        </dt>
        <dd></dd>
      </dl>
    </div>
  </div>
);
export default ExampleWorkBubble;
