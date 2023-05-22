
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);


router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);


router.route('/:userId/friends/:friendsId').delete(removeFriend).post(addFriend);

module.exports = router;
