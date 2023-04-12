const { models } = require('../models');

const createPost = async (req, res) => {
    try {
        const post = await models.Post.create(req.body);
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await models.Post.findAll();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await models.Post.findByPk(req.params.id);
        if (!post) {
            res.status(404).send('Post not found');
        } else {
            res.json(post);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const updatePostById = async (req, res) => {
    try {
        const [rowsUpdated, [updatedPost]] = await models.Post.update(req.body, {
            where: { id
            }
        });
        if (rowsUpdated === 0) {
            res.status(404).send('Post not found');
        } else {
            res.json(updatedPost);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const deletePostById = async (req, res) => {
    try {
        const rowsDeleted = await models.Post.destroy({
            where: { id: req.params.id }
        });
        if (rowsDeleted === 0) {
            res.status(404).send('Post not found');
        } else {
            res.send('Post deleted successfully');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById
};