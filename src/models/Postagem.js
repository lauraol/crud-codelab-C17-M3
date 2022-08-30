const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
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

const Post = mongoose.model('teacher-guides-feed', PostagemSchema);

module.exports = Post;
