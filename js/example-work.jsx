import React from 'react';
import ExampleWorkBubble from './example-work-bubble.jsx';
import ExampleWorkModal from './example-work-modal.jsx';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      modalOpen: false,
      selectedExample: this.props.work[0]
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, example) {
    this.setState({
      modalOpen: true,
      selectedExample: example
    })
  }

  closeModal(event) {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    let bubbles = this.props.work.map((example, i) => (<ExampleWorkBubble key={i} example={example} openModal={this.openModal}/>))
    return (
      <div>
        <section className="section section--alignCentered section--description">
          {bubbles}
        </section>

        <ExampleWorkModal closeModal={this.closeModal} example={this.state.selectedExample} open={this.state.modalOpen} />
      </div>
    )
  }
}

export default ExampleWork;