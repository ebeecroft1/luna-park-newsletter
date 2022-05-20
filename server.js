const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./api/models/userModels');
const routes = require('./api/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://lunapark:${ process.env.MONGODB_URI }@cluster0.inlga3s.mongodb.net/?retryWrites=true&w=majority`)

const port = process.env.PORT || 3000; // this is so Heroku can assign a PORT to you
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${ req.originalUrl} not found`});
});

console.log(`Server started on http://localhost:${ port }`);