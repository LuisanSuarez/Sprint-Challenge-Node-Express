import React, { Component } from 'react';

import Action from './Action.js'
// import Action from './Action.js'



class Projects extends Component {

  render() {
      return ( this.props.actions
        ?
        <React.Fragment>
          <h2> Actions </h2>
          {this.props.actions.map(action => (
            <Action data={action} />
          ))}
      </React.Fragment>
      :
        <h2> Loading... </h2>
    );
  }
}

export default Projects;
