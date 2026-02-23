const express = require("express");
const router = express.Router();
const jobcontroller = require("../controllers/jobController");
const upload = require("../middleware/upload");


router.post("/",upload.single("logo"),jobcontroller.createjob);
router.get("/",jobcontroller.getjob);
router.get("/:id",jobcontroller.getsingeljob);
router.put("/:id",upload.single("logo"),jobcontroller.updatejob);
router.delete("/:id",jobcontroller.deletejob);

module.exports = router;