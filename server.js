import Tele from "./models/tele.js";
import express from "express"


const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));




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
    //render page
    const wishList = await Tele.loadMany({etat:0});
    const baughtList1 = await Tele.loadMany({etat:1});
    const baughtList2 = await Tele.loadMany({etat:2});
    console.log(baughtList)
    console.log(wishList)
    const baughtList = baughtList1.join(baughtList2);

    response.render('home.ejs', {wishList,baughtList});
})
app.listen(3000, function(){
    console.log("Server ok");
});