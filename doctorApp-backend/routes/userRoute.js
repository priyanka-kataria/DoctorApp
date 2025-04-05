const express = require('express');
const userController= require('../controller/userController.js');
const { protect } = require('../middleware/authAdmin.js');
const authenticateToken = require('../middleware/authUser.js');

const router = express.Router();

// Define routes for doctor operations
router.post('/register', userController.registerUser);
router.post('/login',userController.loginUser)
router.post('/getuser',authenticateToken, userController.getUser);
router.put("/update_profile", authenticateToken, userController.updateProfile);
// router.post('/', doctorController.createDoctor);
// router.put('/:id', doctorController.updateDoctor);
// router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
