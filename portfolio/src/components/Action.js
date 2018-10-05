import React, { Component } from 'react';


class Action extends Component {

  render() {
    console.log('Action Props:', this.props);
    return (
      <React.Fragment>
        <h4>Action: {this.props.data.description}</h4>
        <p>Notes: {this.props.data.notes}</p>
      </React.Fragment>
    );
  }
}

export default Action;
