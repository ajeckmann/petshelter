uniqueValidator = require("mongoose-unique-validator");
const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({

    name:{
    type: String,
    required:[true, "Must Include a Name for Your Pet"],
    minlength:[3, "Name must be at least 3 characters long"],
    unique: [true, "sorry, that pet already exists"]
    
    },

    type:{

        type: String,
        required:[true, "Must specify what type of pet"],
        minlength: [3, "Type must be at least 3 characters long"]
    },

    description:{

        type: String,
        required:[true, "Must include description"],
        minlength: [3, "Description must be at least 3 characters long"]
    },


    skillone: {
        type: String,

    },

    skilltwo: {
        type: String,

    },

    skillthree: {
        type: String,
    },

    likes:{
        type: Number,
        default: 0
    }
    
}, {timestamps: true});
PetSchema.plugin(uniqueValidator);

module.exports.Pets = mongoose.model("Pets", PetSchema);