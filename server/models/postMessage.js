import mongoose from 'mongoose';

// Creating mongoose Schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  //  Where we convert our image to string using filed-based64
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turn our created Schema into a Model using .model method.
const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;
