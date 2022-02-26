const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addToFriendList,
    removefromFriendList
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addToFriendList);


router
    .route('/:userId/friends/:friendId')
    .delete(removefromFriendList);

//export for global use
module.exports = router;