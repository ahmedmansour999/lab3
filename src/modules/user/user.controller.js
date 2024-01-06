import  post  from "../../../db/model/post.model";
import  user  from "../../../db/model/user.model";

export const sigup = async (req, res) => {
  try {
    const user = new user(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user.findOne({ email, password });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await user.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}


export const searchUser = async (req, res) => {
  const { name, age } = req.query;
  try {
    const users = await user.find({ userName: { $regex: new RegExp(`^${name}`, 'i') }, age: { $lt: age } });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const searchByAge = async (req, res) => {
  const { minAge, maxAge } = req.query;
  try {
    const users = await user.find({ age: { $gte: minAge, $lte: maxAge } });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const allUser = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const userProfial  =  async (req, res) => {
  try {
    const user = await user.findById(req.params.id).populate('posts');
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}