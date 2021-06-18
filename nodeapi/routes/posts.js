const express = require('express')
const {getPosts, createPost, postsByUser,postById, isPoster, deletePost, updatePost} = require('../controllers/posts')
const {requireSignin} = require('../controllers/auth')
const {userById } = require('../controllers/user')
const {createPostValidator} = require('../validator')


const router  = express.Router();

router.get('/posts',requireSignin,getPosts);
router.post('/post/new/:userId',requireSignin,createPostValidator,createPost);
router.get("/posts/by/:userId", postsByUser)
router.put('/post/:postId', requireSignin, isPoster, updatePost)
router.delete('/post/:postId', requireSignin, isPoster, deletePost)


// any routes containing userId , our app will first execute by UserByID()
router.param("userId",userById);
// any routes containing postId , our app will first execute by PostByID()
router.param("postId",postById);


module.exports = router;

