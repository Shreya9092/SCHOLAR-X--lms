const express = require("express");
const router = express.Router();

const {
  createAssignment,
  getStudentAssignments,
  submitAssignment,
  getSubmissionsByAssignment
} = require("../controllers/assignment/assignmentController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Teacher
router.post(
  "/create",
  protect,
  authorizeRoles("teacher"),
  createAssignment
);

router.get(
  "/submissions/:assignmentId",
  protect,
  getSubmissionsByAssignment
);

// Student
router.get(
  "/student",
  protect,
  authorizeRoles("student"),
  getStudentAssignments
);


router.post(
  "/submit",
  protect,
  authorizeRoles("student"),
  upload.single("file"),
  submitAssignment
);



module.exports = router;