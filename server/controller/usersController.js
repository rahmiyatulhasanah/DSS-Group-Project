import mongoose from "mongoose";
import User from "../models/users.js";


export const findAllLaptop = async (req, res, next) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getCurrentLaptop = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      id: user._id,
      name : user.name,
      harga: user.harga,
      lebar: user.lebar,
      penyimpanan: user.penyimpanan,
      ram: user.ram,
      processor: user.processor,
      merek: user.merek,
      layarsentuh: user.layarsentuh
    });
  } catch (err) {
    next(err);
  }
};

export const createLaptop = async (req, res, next) => {
    const user = new User({
      name: req.body.name,
      harga: req.body.harga,
      lebar: req.body.penyimpanan,
      ram: req.body.ram,
      processor: req.body.processor,
      merek: req.body.merek,
      layarsentuh: req.body.layarsentuh,
    });
    const result = await user.save();
    res.status(201).send({ message: "Laptop successfully created!" });
  }
;

export const seeLaptop = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name: name });
    if (!name) {
      return res.status(400).json({
        errors: "Could not find this laptop!",
        error_type: "laptop_name",
      });
    }
  } catch (err) {
    next(err);
  }
};

export const updateLaptopById = async (req, res, next) => {
  try {
    console.log(req.params.id)
    const id = req.params.id;
    const response = await User.findByIdAndUpdate({ _id: id }, req.body);
    if (!response) {
      res
        .status(404)
        .send({ message: `Can't update, user with id=${id} not found!` });
    } else if (Object.keys(req.body).length === 0) {
      res.status(404).send({ message: "Can't update, update value is empty!" });
    } else {
      res.status(201).send({ message: "Laptop successfully updated!" });
    }
  } catch (err) {
    next(err);
  }
};

export const deleteLaptop = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await User.findByIdAndDelete(id);
    if (!response) {
      res.status(404).send({ message: "Delete failed, Laptop not found!" });
    } else {
      res.status(201).send({ message: "Laptop successfully deleted!" });
    }
  } catch (err) {
    next(err);
  }
};