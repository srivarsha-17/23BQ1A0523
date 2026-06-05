######### STAGE 1:

The Notification system should be sending a notification to the student that they have logged in.

The core actions that the notification platform should support are:

#Authentication of students information




###NOTIFICATION SERVICE:

The notification service would require the following end-points:

1. GET /all -> to get all the notifications


app.get('/notify/all,aysnc (req,res)=>{
    const Users = await User.find();
    res.status(200).json(Users)
})

REQUEST STRUCTURE: 

GET /notify/all

Headers : [Authorization : Bearer Token]


RESPONSE STRUCTURE

{
    "title":"Holiday on June 6 2026",
    "content":"Holiday has been announced today due to the weather conditions"
}



2. MARK AS READ

PUT /notify/:id

app.put('/notify/:id/modify',async (req,res)=>{
    const modifiedUser = await User.findByIdAndModify(req.params.id);
    User.save();
    res.status(201).json(modifiedUser)
})



3. DELETE NOTIFICATIONS


DELETE /notify/delete/:id


app.delete('/notify/delete/:id',async (req,res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.json({deletedUser})
})


===========================================================================================================================================================


######### STAGE 2

I would use an SQL database like the MYSQL because here the information is quite structured and all the fields follow a proper structure which is why i would choose MYSQL OR ANY other SQL database


SCHEMA FOR THE DATABASE

create table StudentDetails(
    roll_no PRIMARY KEY VARCHAR2(50),
    name VARCHAR2(50),
    email VARCHAR2(50)
)

create table Notifications(
    title VARCHAR2(20),
    content VARCHAR2(100),
    isRead BOOLEAN DEFAULT FALSE
)

Queries for REST APIs

1. GET /all

select * from Notifications


2. PUT /notify/:id

UPDATE notifications SET is_read = TRUE WHERE id = 1;


3.DELETE /

DELETE FROM Notifications WHERE id = 1;

============================================================================================================================================================
#######STAGE 3

The above query is slow for larger databases because it involves scanning of every id of the database which becomes complex for larger datasets and hence it is better to solve it by using INDEXING



===============================================================================================================================================================


####STAGE 4

If the load for a system is recieving more load then it is better to use concepts like Caching.
Using a fast key-index based system like Redis can decrease the load significantly







