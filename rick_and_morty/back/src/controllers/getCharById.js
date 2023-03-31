const axios = require ("axios")
const server = require("../server");
// const { URL_BASE , KEY } = process.env;

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "8e2a27fa2bac.a435f2ada59bba4ec749";

const getCharById  = (req,res) => {
    console.log("está llegando una petición a /character");
    console.log(KEY);
    const {id} = req.params;


    const successH= (response, res) => {
        const {id,image,name,gender,species} = response.data
        res.status(200).json({id,image,name,gender,species});
    };
        
            
    const errorH = (error) => {
        res.status(500).json({error: error.message})
    };
 
    axios 
        .get(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then ((response) => successH(response,res))
        .catch((error) => errorH(error));

}

module.exports = getCharById;