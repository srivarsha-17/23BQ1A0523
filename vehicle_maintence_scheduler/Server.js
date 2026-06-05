
const Log = require('./middleware/Log')
const express  = require('express')

const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const axios = require('axios')
const PORT = 3000

app.get("/depot", async (req, res) => {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",{
                headers:{
                    Authorization: `Bearer ${token}` 
                }
            }
        );

        res.json(response.data);
        await Log("backend","info","db","Depot Information is retrieved successfully")

    } catch (err) {
        res.status(500).json({
            message: "Error fetching Depot information"
        });

        await Log(
            "backend",
            "error",
            "db",
            "Error Fetching Vehicle Information"
        );
    }
});


app.get("/vehicles", async (req, res) => {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",{
                headers:{
                    Authorization: `Bearer ${token}` 
                }
            }
        );

        res.json(response.data);
        await Log("backend","info","db","Vehicle Information is retrieved successfully")

    } catch (err) {
        res.status(500).json({
            message: "Error fetching vehicle information"
        });

        await Log(
            "backend",
            "error",
            "db",
            "Error Fetching Vehicle Information"
        );
    }
});







app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:3000`)

})

