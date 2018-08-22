import React from 'react';
import ExampleWorkBubble from './example-work-bubble.jsx';

class ExampleWork extends React.Component {
  render() {
    let bubbles = this.props.work.map((example, i) => (<ExampleWorkBubble key={i} title={example.title} image={example.image} />))
    return (
      <section className="section section--alignCentered section--description">
        {bubbles}
      </section>
    )
  }
}

export default ExampleWork;