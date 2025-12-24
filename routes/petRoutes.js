const express = require("express");
const {
  getPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
} = require("../controller/PetController");

const {auth,admin} = require("../middleware/authMiddleware");

const router = express.Router();


router.get("/", getPets);
router.get("/:id", getPetById);


router.post("/", auth, admin, addPet);
router.put("/:id", auth, admin, updatePet);
router.delete("/:id", auth, admin, deletePet);

module.exports = router;
