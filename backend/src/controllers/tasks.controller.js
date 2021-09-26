const Task = require('../models/tasks.model');

// function to add a new todo task
exports.createTask = (req, res) => {


    // getting the data comming from the request to a variable by destructering
    const { title, endDate } = req.body;

    // creating a object to save data
    const task = new Task({
        title,
        endDate

    });

    // use.save function to save the object in the database

    task.save(((error, task) => {
        if (error) return res.status(400).json({ error });
        if (task) {
            res.status(201).json({ task });
        }
    }));

};



// function to update the task

exports.updateTask = async (req, res) => {
    const { _id } = req.body;

    // for a single cat update
    const activeStatus = "Done";
    const task = {
        activeStatus
    };
    console.log(_id);
    const updatedTask = await Task.findOneAndUpdate({ _id }, task);
    return res.status(201).json({ updatedTask })

}


// to get all the todos  from the database
exports.getTasks = async (req, res) => {
    const tasks = await Task.find({})
        .exec();
    res.status(200).json({ tasks });
}


// detele a task by id
exports.deleteTaskById = (req, res) => {
    //console.log(req.body);
    //const { title, endDate } = req.body;
    const { taskId } = req.body.payload;
    if (taskId) {
        Task.deleteOne({ _id: taskId }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(202).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: 'Id is required ' });

    }
};
