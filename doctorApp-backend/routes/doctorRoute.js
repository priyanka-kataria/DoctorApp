const express = require('express');
const doctorController = require('../controller/doctorController');

const router = express.Router();

// Define routes for doctor operations
router.get('/list', doctorController.doctorList);
// router.get('/:id', doctorController.getDoctorById);
// router.post('/', doctorController.createDoctor);
// router.put('/:id', doctorController.updateDoctor);
// router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;