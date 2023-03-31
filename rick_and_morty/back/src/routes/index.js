const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favsRouter = require("../routes/favsRouter");
let favs = require("../utils/favs"); 


const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

/*************************************************************************+ */

router.post("/rickandmorty/fav", (req,res) => {
    console.log("esta entrando una petición de tipo post");
    favs.push(req.body);
    res.status(200).json({status : "ok"})

}); 

router.get("/rickandmorty/fav", (req,res) => {
    console.log("esta entrando una petición de tipo get");
    res.status(200).json(favs)

});

router.delete("/rickandmorty/fav/:id", (req,res) => {
    console.log("esta entrando una petición de tipo delete");
    const {id} = req.params;
    favs = favs.filter((char) => char.id != id)
    res.status(200).json({status: "Borrado"})
});
 

module.exports = router;