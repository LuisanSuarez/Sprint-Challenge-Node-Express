import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { Route, Link } from 'react-router-dom'

import Projects from './components/Projects.js'
import Actions from './components/Actions.js'

class App extends Component {

  state = {
    projects : null,
    actions : null
  }

  componentDidMount() {
    axios
    .get('http://localhost:9000/actions')
    .then(res => {
      this.setState({actions: res.data})
    })
    .catch(err => {
      console.error(err);
    })
    axios
      .get('http://localhost:9000/projects')
      .then(res => {
        this.setState({projects: res.data})
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      this.state.actions ?
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <React.Fragment></React.Fragment> */}
        <Route exact path='/projects' render={props =>
          <Projects
            {...props}
            projects={this.state.projects}
            actions={this.state.actions}
          />
        }/>
        <Route path='/projects/:id' render={props =>
          <Actions
            {...props}
            actions={this.state.actions}
          />
        }/>
        <Route exact path='/actions' render={props =>
          <Actions
            {...props}
            actions={this.state.actions}
          />
        }/>
      </div>
      :
      <h2>Loading...</h2>
    );
  }
}

export default App;

{/* <p> {this.props.data.description}</p>
{this.props.actions.filter(action => (
  action.project_id === this.props.data.id
  )).map(project_action => (
    <Action data={project_action} />
  ))
} */}
