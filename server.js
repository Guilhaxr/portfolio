require('dotenv').config();
const path = require('path');
const Routes = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const app = express();




app.use(express.json());

Routes(app);


// app.use("/api/projects", require("./routes/projects.routes"));

app.use(express.urlencoded({ extended: false }));




mongoose
   .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.efgkj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
   )
   .then((result) => console.log('Connected to MONGO ATLAS'))
   .catch((err) => console.log(err));

   app.use((req, res) =>
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
   );

   const port = process.env.PORT || 3001;

   app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
 });