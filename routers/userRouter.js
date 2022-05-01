const router = require('express').Router()
const userController = require('../controllers/userController')

// user routers
router.post('/add-user', userController.addUser)

router.get('/get-users', userController.getAllUser)

router.get('/get-user-byId/:id', userController.getUserById)

router.patch('/edit-user/:id', userController.editUser)

router.delete('/delete-user/:id', userController.deleteUser)

module.exports = router