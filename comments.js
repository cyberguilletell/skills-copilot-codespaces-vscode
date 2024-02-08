// Create web Sever
const express = require('express');
const router = express.Router();
const commentModel = require('../models/comments.model');

// get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// get comment by id
router.get('/:commentId', async (req, res) => {
  try {
    const comment = await commentModel.findById(req.params.commentId);
    res.json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

// create new comment
router.post('/', async (req, res) => {
  const comment = new commentModel({
    user: req.body.user,
    content: req.body.content,
    post: req.body.post,
    date: req.body.date
  });

  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete comment by id
router.delete('/:commentId', async (req, res) => {
  try {
    const removedComment = await commentModel.remove({ _id: req.params.commentId });
    res.json(removedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// update comment by id
router.patch('/:commentId', async (req, res) => {
  try {
    const updatedComment = await commentModel.updateOne(
      { _id: req.params.commentId },
      { $set: { content: req.body.content } }
    );
    res.json(updatedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;