const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')

//Middle ware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


const inforouter = require('./route');
app.use("/api" , inforouter);

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'));
    });
}

app.listen(5000 , () => console.log('App is running on port 5000')); 

mongoose.connect ('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser : true ,
    useCreateIndex : true
}, (err) => {
    if(!err){
        console.log('Data base has connected successfully');
    }else{
        console.log('Sorry you are not connected to the database');
    }
})