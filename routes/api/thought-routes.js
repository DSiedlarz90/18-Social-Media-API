const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:id/reactions')
    .post(addReaction);

router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);

//export for global use
module.exports = router;