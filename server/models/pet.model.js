const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minLenght: [3, 'name must be at least 3 characters'],
    },
    type:{
        type: String,
        required: [true, 'type is required'],
        minLenght: [3, 'type must be at least 3 characters'],
    },
    description:{
        type: String,
        required: [true, 'description is required'],
        minLenght: [3, 'description must be at least 3 characters'],
    },
    skillOne:{
        type: String,
        
    },
    skillTwo:{
        type: String,
        
    },
    skillThree:{
        type: String,
        
    }
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);