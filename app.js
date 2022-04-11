const Express = require("Express");
const App = Express();
App.use(Express.static(__dirname));
App.listen(8080,()=>{
    console.log("Running on 8080");
})
App.get("/",(req,res)=>{
    //res.send("Hellow World");
    res.sendFile(__dirname + "index.html")
})