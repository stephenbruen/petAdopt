const Pet = require('../models/pet.model')

const createPet = (req, res)=>{
    Pet.create(req.body)
        .then((newPet)=>{
            res.status(201).json({newPet})
        })
        .catch((err)=>{
            res.status(400).json({err})
        })
}
    const getAllPets = (req, res) => {
        Pet.find()
        .then((allPets) => {
            res.status(200).json(allPets);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

    const getOnePet = (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((onePet) => {
                res.status(200).json(onePet);
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
        };

    const updatePet = (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedPet) => {
            res.status(200).json({ updatedPet });
        })
            .catch((err) => {
                res.status(400).json({ err });
            });
        };

    const deletePet= (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then((deletedPet) => {
                res.status(200).json({ deletedPet });
            })
            .catch((err) => {
                res.status(400).json({ err });
        });
    };


module.exports={
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet
}