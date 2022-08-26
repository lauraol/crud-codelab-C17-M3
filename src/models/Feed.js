const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  postagem: {
    type: String,
    require: true,
  },
  curtida: {
    type: Boolean,
    require: false,
  },
  comentario: {
    type: String,
    require: false,
  },
});

const Feed = mongoose.model('teacher-guides-feed', FeedSchema);

module.exports = Feed;
