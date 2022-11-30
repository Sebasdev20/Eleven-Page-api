const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
 
  image: {
    //URL's
    type: String,
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  precio: {
    type: String,
    trim: true,
    required: true
  },
  hidden: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });


module.exports = Mongoose.model("Post", PostSchema);
