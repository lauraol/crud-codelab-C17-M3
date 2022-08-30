const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  postagem: {
    type: String,
    required: true,
  },
  curtida: {
    type: Array,
    required: true,
  },
  comentario: {
    type: Array,
    required: true,
  },
});

const Feed = mongoose.model('teacher-guides-feed', FeedSchema);

module.exports = Feed;
