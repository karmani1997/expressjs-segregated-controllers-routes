const router = require('express').Router()
usersController = require('../controllers/users.js')


router.get('/', usersController.helloWorld);

router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
