import Tele from "./models/tele.js";
import express from "express"

let televisionList = new Tele;
const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));  
app.post('/add-tv',async function (request,response){
    if (request.body.something != null){
        
        response.redirect('/');
    }
})
app.get('/buy-tv',async function (request,response){
    if (request.query.something != null){
        //do something
        response.redirect('/');

    }
})
app.get('/complete-cause',async function (request,response){
    if (request.query.something != null){
        //do something
        response.redirect('/');

    }
})
app.get('/',async function (request,response){
    if (request.query.something != null){
        //render page
        const wishList = await televisionList.loadMany({etat:0});
        const baughtList = await televisionList.loadMany({etat:1,etat:2})
        res.render('home.ejs', {wishList,baughtList});
        response.redirect('/');

    }
})
app.listen(3000, function(){
    console.log("Server ok");
});