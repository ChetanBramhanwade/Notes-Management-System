const UserModel = require('./models/Users');

const router = require('express').Router();


router.post('/Add', async (req, res) => {
    var data = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(req.body);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/getAll', async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
        console.log(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


router.get('/get/:id', async (req, res) => {
    try {
        const data = await UserModel.findById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch('/modify/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await UserModel.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const data = await UserModel.findOneAndDelete({
            username: req.body.username
        });
        res.send(`document with ${data.username} has been deleted`);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.post('/login',(req, res) => {
    const data = req.body;
    if (data.username === "admin" && data.password === "admin") {
      res.json({ token: "thisismytoken" });
    } else {
      res.status(401).sent("Invalid Credintail");
    }
  });

  
module.exports = router;