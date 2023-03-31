const axios = require ("axios")
// const { URL_BASE, KEY } = process.env;

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "8e2a27fa2bac.a435f2ada59bba4ec749";


const getCharDetail  = (req,res) => {
    const {id} = req.params


    const successH= (response, res) => {
        const {id,image,name,gender,species,origin} = response.data
        res.status(200).json({id,image,name,gender,species,origin});
    };
        
            
    const errorH = (error) => {
        res.status(500).json({error: error.message})
    };
 
    axios 
        .get(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then ((response) => successH(response, res))
        .catch((error) => errorH(error));

}

module.exports = getCharDetail;