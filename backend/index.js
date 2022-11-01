const { application } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//Database
const mongoose = require('mongoose');
const uri = "mongodb+srv://EvanChenon:<password>@cluster0.avgwp5v.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then((() => console.log("Connected to Mongo"))).catch(err => console.error("Error connecting to Mongo", err))

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const User = mongoose.model("User", userSchema)
const evan = new User({ name: "evan", password: "chenon" })
evan.save().then(res => console.log("evan enregistré", res)).catch(err => console.log("evan pas enregistré", err))
console.log("evan", evan)

// MiddLeware
app.use(cors());
app.use(express.json());

// Routes

app.post('/api/auth/signup', (req, res) => {
  console.log('signup request:', req.body);
  res.send({ message: 'Utilisateur enregistré !' });
});
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('Listening on port' + port));
