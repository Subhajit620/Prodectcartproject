const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();
var email;
var pass;
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
    res.render("home.ejs", {});
});

server.get("/ElectronicsGSTstore", (req, res) => {
    res.render("ElectronicsGSTstore.ejs", {});
});

server.get("/camera", (req, res) => {
    res.render("camera.ejs", {});
});



mongoose.connect("mongodb://localhost/productkart", {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log("connected to database"))
    .catch(err => console.log("failed", err));

const playlistSchema = new mongoose.Schema({

    email: String,
    password: String,


})





var Playlist;





server.get("/register", (req, res) => {
    res.render("register.ejs", {});


    server.post("/register", function (req, res) {
        email = req.body.email2;
        pass = req.body.password2;


        Playlist = new mongoose.model("Playlist", playlistSchema);


        const createdocument = async () => {
            try {

                const reactPlaylist = new Playlist({
                    email: email,
                    password: pass,


                })
                const result = await reactPlaylist.save();
                console.log(result);

            }
            catch (err) {
                console.log(err);
            }


        }

        createdocument();


        res.end();

    });

});



server.get("/login", (req, res) => {
    res.render("login.ejs", {});
});

server.post("/", function (req, res) {
    const emailid = req.body.email3;
    const passid = req.body.password3;

playlistSchema.findOne({ email: emailid }, function(err, found) {
        if (err) {
            console.log(err);
        }
        else {
            if (found) {
                if (found.pass == password2) {
                    res.render("secrets");
                }
            }
        }
    })

    res.end();

});















server.listen(3000, () => {
    console.log("this server is running on port 3000");
})






