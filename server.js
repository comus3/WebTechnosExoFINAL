const express = require('express');
const app = express();
app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


//db.js

let connection = require('./db.js');

 // Function to remove a task by ID
 const removeTaskById = (taskID) => {
    const deleteQuery = 'DELETE FROM user WHERE taskID = ?';
    connection.query(deleteQuery, [taskID], (deleteErr, result) => {
    if (deleteErr) {
        console.error('Error deleting task:', deleteErr);
        return;
    }
    console.log(`Task with ID ${taskID} deleted successfully:${JSON.stringify(result)}`);
    });
};

  // Function to add a task
  const addTask = (taskString) => {
    const insertQuery = 'INSERT INTO user (task) VALUES (?)';
    connection.query(insertQuery, [taskString], (insertErr, result) => {
    if (insertErr) {
        console.error('Error adding task:', insertErr);
        return;
    }
    console.log(`Task "${taskString}" added successfully with ID ${result.insertId}`);
    });
};


const getUserData = (response) => {
    connection.query("SELECT * FROM user;", function (error, resultSQL) {
        if (error) {
        response.status(400).send(error);
        } else {
        let dataBase = {}
        response.status(200);
        dataBase = resultSQL;
        console.log(dataBase);
        response.render('home.ejs', { taskTable: dataBase });
        }
    });
};
  



app.use(express.static('public'));

app.post('/', (request,response)=>{

    if (request.body.something != null){
        //do something
    }
})


app.get('/',(request,response)=>{
    if (request.query.something != null){
        //do something
    }
})


app.listen(3000, function(){
    console.log("Server ok");
});




