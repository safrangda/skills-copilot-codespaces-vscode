// create web server with express
// use express router
// use comments controller
// export router

// import express
const express = require('express');

// import comments controller
const commentsCtrl = require('../controllers/comments');

// create express router
const router = express.Router();

// export router
module.exports = router;

// define routes for comments
router.get('/', commentsCtrl.getAllComments);
router.get('/:id', commentsCtrl.getCommentById);
router.post('/', commentsCtrl.createComment);
router.put('/:id', commentsCtrl.updateComment);
router.delete('/:id', commentsCtrl.deleteComment);
router.get('/posts/:id', commentsCtrl.getCommentsByPostId);
router.get('/users/:id', commentsCtrl.getCommentsByUserId);
router.get('/users/:id/posts', commentsCtrl.getCommentsByUserPostId);
router.get('/posts/:id/users', commentsCtrl.getCommentsByPostUserId);