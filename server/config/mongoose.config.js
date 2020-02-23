const mongoose = require('mongoose');
const database= "pets";

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Database connection establishified"))
.catch(err=>console.log("There was an error", err));
