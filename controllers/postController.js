const { insertPost, insertCommentToDb, findAllPostsFromDb, getCommentsByPostIdFromDb } = require('../model/weedsterOrm');

const postApi = async (req, res) => {
  console.log(req.body);
  const {title, category, caption, userId}=req.body
  const result = await insertPost(title, category, caption, userId)
  res.json(result);
};
const insertCommentApi = async (req, res) => {
  console.log(req.body);
  const {message, postId, userId} = req.body 
  const result = await insertCommentToDb(message, postId, userId)
  res.json(result);
};
const getCommentsApi = async (req, res) => {
  console.log ("inside get comments api", req.query);
  // const postId = req.body.postId
  const {postId}=req.query 
  const result = await getCommentsByPostIdFromDb (postId)
  res.json(result)
}

const getPosts = async (req, res) => {
  const result = await findAllPostsFromDb()
  res.json(result);
};

module.exports = {
  postApi,
  getPosts,
  insertCommentApi, 
  getCommentsApi,
};
