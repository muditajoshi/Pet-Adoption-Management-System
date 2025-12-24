
const Pet = require("../model/petModel");


exports.getPets = async (req, res) => {
  const { search, species, breed } = req.query;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const query = { status: "AVAILABLE" };

  if (search) query.name = new RegExp(search, "i");
  if (species) query.species = species;
  if (breed) query.breed = breed;

  const pets = await Pet.find(query)
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(pets);
};


exports.getPetById = async (req, res) => {
 const pet = await Pet.findById(req.params.id);

  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }

  res.json(pet);
};


exports.addPet = async (req, res) => {
  const pet = await Pet.create(req.body);
  res.status(201).json(pet);
};


exports.updatePet = async (req, res) => {
 const pet = await Pet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }
    res.json(pet);
};


exports.deletePet = async (req, res) => {
   const pet = await Pet.findByIdAndDelete(req.params.id);
  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }
  res.json({ message: "Pet deleted" });
};
