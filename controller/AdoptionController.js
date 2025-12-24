
const Adoption = require("../model/adoptionModel");
const Pet = require("../model/petModel");


exports.applyAdoption = async (req, res) => {
  const pet = await Pet.findById(req.body.petId);

  if (!pet || pet.status !== "AVAILABLE") {
    return res.status(400).json({ message: "Pet not available" });
  }

  const adoption = await Adoption.create({
    user: req.user.id,
    pet: pet._id,
  });

  pet.status = "PENDING";
  await pet.save();

  res.status(201).json(adoption);
};


exports.getMyApplications = async (req, res) => {
  const apps = await Adoption.find({ user: req.user.id }).populate("pet");
  res.json(apps);
};


exports.getAllApplications = async (req, res) => {
  const apps = await Adoption.find().populate("user pet");
  res.json(apps);
};


exports.updateApplicationStatus = async (req, res) => {
  const adoption = await Adoption.findById(req.params.id).populate("pet");

  adoption.status = req.body.status;
  adoption.pet.status =
    req.body.status === "APPROVED" ? "ADOPTED" : "AVAILABLE";

  await adoption.pet.save();
  await adoption.save();

  res.json(adoption);
};
