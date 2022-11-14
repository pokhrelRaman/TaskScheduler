const mongoose = require('mongoose');

const taskSchema =  mongoose.Schema({
    name:
    {
        type : String,
        required: [true , 'Must gib name '],
        maxlength : [20,'Name max len 20'],
        trim : true        
    },            

    completed:
    {
        type:Boolean,
        default:false
    } 
}) 

module.exports = mongoose.model('task',taskSchema);