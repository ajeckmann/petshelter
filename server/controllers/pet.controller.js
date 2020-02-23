const {Pets} = require('../models/pet.model');



module.exports.createPet=(request, response)=>{
    console.log(request.body);
    const{title, price, description} = request.body;
    Pets.create(request.body)
    .then(pet=>response.json(pet))
    .catch(err=>response.status(400).json(err.errors));


}

module.exports.index=(request, response)=>{
    Pets.find({}).sort({type: 1})
        .then(pet=>response.json(pet))
        .catch(err=>response.json(err))
}

module.exports.ViewPet=(request, response) => {
    Pets.findOne({_id:request.params.id})
      .then(pet=>response.json(pet))
      .catch(err=>response.json(err))
}


module.exports.updatePet=(request,response)=>{
    Pets.findOneAndUpdate({_id:request.params.id}, request.body, {runValidators:true, context: 'query'})
    .then(updatedPet=>response.json(updatedPet))
    .catch(err=>response.status(400).json(err.errors));
}
    

module.exports.deletePet=(request,response)=>{
    Pets.deleteOne({_id: request.params.id})
    .then(deletedPet=>response.json(deletedPet))
    .catch(err=>response.status(400).json(err.errors));

}