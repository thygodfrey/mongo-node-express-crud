const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const { sequelize } = require('./models');

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// set up the post routes
app.use('/posts', postRoutes);

// sync the database and start the server
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    })
    .catch(error => console.error(error));
