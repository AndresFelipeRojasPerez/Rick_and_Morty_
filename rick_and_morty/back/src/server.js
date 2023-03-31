const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

server.listen(PORT, () => {
    console.log(`Server raised in port${PORT}`);
 });

   