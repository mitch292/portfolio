import React from 'react';

const ExampleWorkBubble = (props) => (
    <div className="section__exampleWrapper">
    <div className="section__example">
      <img alt={props.image.desc}
           className="section__exampleImage"
           src={props.image.src}/>
      <dl className="color--cloud">
        <dt className="section__exampleTitle section__text--centered">
          {props.title}
        </dt>
        <dd></dd>
      </dl>
    </div>
  </div>
);
export default ExampleWorkBubble;
