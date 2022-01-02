require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();


mongoose
   .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.efgkj.mongodb.net/${process.env.DB_PROJECT}?retryWrites=true&w=majority`
   )
   .then((result) => console.log('Connected to MONGO ATLAS'))
   .catch((err) => console.log(err));


   app.use((req, res) =>
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

   const port = process.env.PORT || 5000;

   app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
 });