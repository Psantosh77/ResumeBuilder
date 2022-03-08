const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://surender:negi1234@cluster0.xlhcz.mongodb.net/resumeBuilder?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('database successfully connected');
  })
  .catch((err) => {
    console.log(err);
  });
