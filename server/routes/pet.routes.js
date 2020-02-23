const PetController= require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api/pet', PetController.index);
    app.post('/api/pet', PetController.createPet);
    
    app.get('/api/pets/:id', PetController.ViewPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);

}