
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

module.exports.deleteTask = function(req, res){
    const id = req.query.id;

    tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the file: ',err);
            return;
        }
        console.log('deleted succesfully');
        return res.redirect('back');
    });
}

module.exports.editTask = function(req, res){
    const id = req.query.id;
    const desc = req.query.desc;
    const due = req.query.due;
    console.log(id);

    return res.render('edit', {
        id: id,
        desc: desc,
        due: due
    });
}

module.exports.updateTask = function(req,res){
    const id = req.query.id;
    console.log("update chala", id);
    tasks.findByIdAndUpdate(id, req.body, function(err){
        if(err){
            console.log("error in updating the content     ", err);
            return;
        }
        console.log("Updated successfully");
        return res.redirect('/');
    });
}