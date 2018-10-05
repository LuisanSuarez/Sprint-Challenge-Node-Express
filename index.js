const express = require('express');
const cors = require('cors');
const helmet =require('helmet');

const projectModel  = require('./data/helpers/projectModel.js')
const actionModel  = require('./data/helpers/actionModel.js')

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())


// ******************
// ****Project Methods**
// ******************
server.get('/projects', (req, res, next) => {
  projectModel.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json(err)
    })

})

server.get('/projects/:id', (req, res, next) => {
  projectModel.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

server.post('/projects', (req, res, next) => {
  const { name, description, completed } = req.body;
  const newProject = { name, description, completed };
  projectModel.insert(newProject)
    .then(
      res.status(200).json(newProject)
    )
    .catch(err => {
      console.error(err);
    })
})

server.put('/projects', (req, res, next) => {
  const { name, description, id } = req.body;
  const updatedProject = { name, description };
  projectModel.update(id, updatedProject)
    .then(
      res.status(200).json(updatedProject)
    )
    .catch(err => {
      console.error(err);
    })
})

server.delete('/projects', (req, res, next) => {
  const { id } = req.body;
  projectModel.remove(id)
    .then(
      res.status(200).json(`Project with ID ${id} has been banished`)
    )
    .catch(err => {
      console.error(err);
    })
})


// ******************
// **Action Methods**
// ******************

server.get('/actions', (req, res, next) => {
  actionModel.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json(err)
    })

})

server.post('/actions', (req, res, next) => {
  const { description, project_id, notes } = req.body;
  const newPost = { description, project_id, notes };
  actionModel.insert(newPost)
    .then(
      res.status(200).json(newPost)
    )
    .catch(err => {
      console.error(err);
    })
})


server.put('/actions', (req, res, next) => {
  const { description, id } = req.body;
  const updatedAction = { description };
  actionModel.update(id, updatedAction)
    .then(
      res.status(200).json(updatedAction)
    )
    .catch(err => {
      console.error(err);
    })
})


server.delete('/actions', (req, res, next) => {
  const { id } = req.body;
  actionModel.remove(id)
    .then(
      res.status(200).json(`Action #${id} has been banished`)
    )
    .catch(err => {
      console.error(err);
    })
})





// ******************
// Init Port & Listen
// ******************
const port = 9000

server.listen(port, () => console.log(`\n ** ** ** Listening on on port ${port} ** ** **  ` ))
