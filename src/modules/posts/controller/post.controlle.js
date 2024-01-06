import  post  from "../../../../db/model/post.model";
import  user  from "../../../../db/model/user.model";

export const addPost = async (req, res) => {
  try {
    const { userID, title, content } = req.body;

    const user = await user.findById(userID);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const post = new post({ userID, title, content });
    await post.save();

    user.posts.push(post._id);
    await user.save();

    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}


export const deletePost = async (req, res) => {
  try {
    const post = await post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }

    const user = await user.findById(post.userID);
    if (!user || user._id.toString() !== req.body.userID) {
      return res.status(403).send({ error: 'Unauthorized to delete this post' });
    }

    await post.remove();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }

    const user = await user.findById(post.userID);
    if (!user || user._id.toString() !== req.body.userID) {
      return res.status(403).send({ error: 'Unauthorized to update this post' });
    }

    const updatedPost = await post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const allPost = async (req, res) => {
  try {
    const posts = await post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const allPostOwner = async (req, res) => {
  try {
    const posts = await post.find().populate('userID');
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const sortPost = async (req, res) => {
  try {
    const posts = await post.find().sort({ createdAt: 'desc' });
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

