import React, { Component } from 'react';
import Action from './Action.js';
import { Route, Link } from 'react-router-dom'

class Project extends Component {

  render() {
    console.log('Project Props:', this.props);
    return (
      <React.Fragment>
        <Link to={`/projects/${this.props.data.id}`}> <h1> Project: {this.props.data.name} </h1> </Link>
      </React.Fragment>
    );
  }
}

export default Project;
