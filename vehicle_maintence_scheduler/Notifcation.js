
const Log = require('./middleware/Log')
const express  = require('express')

const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const axios = require('axios')
const PORT = 3000

app.get("/notification", async (req, res) => {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",{
                headers:{
                    Authorization: `Bearer ${token}` 
                }
            }
        );

        res.json(response.data);
        await Log("backend","info","db","Notification Information is retrieved successfully")

    } catch (err) {
        res.status(500).json({
            message: "Error fetching Notification information"
        });

        await Log(
            "backend",
            "error",
            "db",
            "Error Fetching Notification Information"
        );
    }
});








app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:3000`)

})

