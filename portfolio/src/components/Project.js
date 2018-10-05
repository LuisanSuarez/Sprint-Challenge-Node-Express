import React, { Component } from 'react';
import Action from './Action.js';

class Project extends Component {

  render() {
    console.log('Project Props:', this.props);
    return (
      <React.Fragment>
        <h1> Project: {this.props.data.name} </h1>
        <p> {this.props.data.description}</p>
        {this.props.actions.filter(action => (
          action.project_id === this.props.data.id
          )).map(project_action => (
            <Action data={project_action} />
          ))
      }
      </React.Fragment>
    );
  }
}

export default Project;
