const express = require("express");
const {
  applyAdoption,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
} = require("../controller/AdoptionController");

const {auth,admin} = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", auth, applyAdoption);
router.get("/applies", auth, getMyApplications);


router.get("/", auth, admin, getAllApplications);
router.put("/:id", auth, admin, updateApplicationStatus);

module.exports = router;
