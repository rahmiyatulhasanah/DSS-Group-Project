import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({

  harga: {
    type: Number,
    required: true,
    min: 500000,
    max: 100000000,
  },
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  lebar: {
    type: String,
    min: 3,
    max: 200,
  },
  penyimpanan: {
    type: String,
    min: 3,
    max: 100,
  },
  ram: {
    type: String,
    required: true,
    min: 3,
    max: 100,
},
  processor: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  merek: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  layarsentuh: {
    type: Boolean,
  },

});

const User = mongoose.model("Laptop", laptopSchema);

export default User;