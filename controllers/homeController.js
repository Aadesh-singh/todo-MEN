
const tasks = require('../models/todoData');

module.exports.home = function(req, res){
    tasks.find({}, function(err, all_tasks){
        if(err){
            console.log('Error occured while fetching data', err);
            return;
        }
        return res.render('home.ejs', {
            tasklist: all_tasks
        });
    });
}

module.exports.createTask = function(req, res){
    tasks.create(req.body, function(err, task){
        if(err){
            console.log("Error in creating task", err);
            return;
        }
        console.log("task created:", task);
        return res.redirect('back');
    })
}