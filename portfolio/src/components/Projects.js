import React, { Component } from 'react';

import Project from './Project.js'
// import Action from './Action.js'



class Projects extends Component {

  render() {
    console.log('Props:', this.props);
    return ( this.props.projects
      ?
      <React.Fragment>
        <h2> Projects </h2>
        {this.props.projects.map(project => (
          <Project data={project} actions={this.props.actions} />
        ))}
    </React.Fragment>
    :
      <h2> Loading... </h2>
    );
  }
}

export default Projects;
