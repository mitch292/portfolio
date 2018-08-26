import React from 'react';

class ExampleWorkModal extends React.Component {
  render() {

    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
    <div className={`background--skyGrey ${modalClass}`}>
      <span className='color--cloud modal__closeButton'
        onClick={this.props.closeModal}
      >
        <i className='fa fa-window-close-o'></i>
      </span>
      <div className='color--cloud modal__text'>
        <h2 className='modal__title'>
          {this.props.example.title}
        </h2>
        <a style={{display: "table-cell"}} target="_blank" className='color--skyGrey modal__link'
            href={this.props.example.href}>
          Check it out
        </a>
        <p className='modal__description'>
        {this.props.example.projectDescription}
        </p>
      </div>
    </div>

    )
  }
};

export default ExampleWorkModal;