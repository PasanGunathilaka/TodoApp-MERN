const express = require('express');
const { createTask,updateTask,getTasks,deleteTaskById} = require('../controllers/tasks.controller');
const router = express.Router();



// Route to create a task
router.post('/create',createTask);

// Route to change the status
router.post('/update',updateTask);

// Route to get all the list
router.post('/all',getTasks);

//Route to remove a task
router.delete('/remove',deleteTaskById);


module.exports =router;