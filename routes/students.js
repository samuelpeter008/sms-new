// routes/students.js
const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');

// GET all students
router.get('/', studentsController.getAllStudents);

// GET a single student
router.get('/:id', studentsController.getStudentById);

// POST a new student
router.post('/', studentsController.createStudent);

// PUT (update) a student
router.put('/:id', studentsController.updateStudent);

// DELETE a student
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
