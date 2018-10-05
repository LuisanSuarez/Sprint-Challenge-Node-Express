import React, { Component } from 'react';


class Action extends Component {

  render() {
    console.log('Action Props:', this.props);
    return (
      <React.Fragment>
        <h4>Action: {this.props.data.description}</h4>
        <p>Notes: {this.props.data.notes}</p>
        <p>ID: {this.props.data.id}</p>
        <p>Project ID: {this.props.data.project_id}</p>
        <p>completed: {this.props.data.completed ? 'Done' : 'Not Just Yet'}</p>
      </React.Fragment>
    );
  }
}

export default Action;
