const express = require("express");
const app = express();

app.use(express.json());

const { getData, insertData,getOne,updateOne ,deleteOne} = require('./controllers/crud');

app.get("/notes", getData);
app.get("/notes/:id", getOne);
app.post("/notes", insertData);
app.put("/notes/:id", updateOne);
app.delete("/notes/:id", deleteOne);


app.listen(3000, () => {
  console.log("server running on port 3000...");
});
