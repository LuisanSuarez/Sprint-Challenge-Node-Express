import React, { Component } from 'react';

import Action from './Action.js'
// import Action from './Action.js'



class Projects extends Component {

  render() {
      return (
        this.props.actions
        ?
        this.props.match.params.id
        ?
        (
          console.log(this.props.match.params.id),
          <React.Fragment>
          <h2> Actions </h2>
          {this.props.actions.filter(action => (
            action.project_id == this.props.match.params.id
          ))
          .map(filtered => (
            <Action data={filtered} />
          ))}
        </React.Fragment>)
          :
          <React.Fragment>
            <h2> NO PARAMS </h2>
            {this.props.actions.map(action => (
              <React.Fragment>
              <Action data={action} />
              <h2> {action} </h2>
              </React.Fragment>
            ))}
          </React.Fragment>
      :
      <h2> Loading... </h2>


    );
  }
}

export default Projects;
