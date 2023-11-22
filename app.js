const mongoose = require('mongoose');

// Replace 'your_mongodb_uri' with your actual MongoDB URI

mongoose.connect('mongodb+srv://chopsy1234:Chopsy1234@cluster0.zfzmjx7.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
