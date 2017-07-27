let express = require('express'),
    bodyParser = require("body-parser"),
    app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let posts = [
    {title: "My first post", content: "Lorem ipsum"},
    {title: "My second post", content: "Lorem ipsum"}
];
app.get('/', function(req, res){
    res.render('index.ejs', {posts: posts});
});
app.get("/post/:id", function(req, res){
    let id = req.params.id;
    res.render('post.ejs', {post: posts[id - 1]})
    //res.send({post: posts[id]});
});
app.get("/write", function(req, res){
      res.render('write.ejs');  
});
app.post("/write", function(req, res){
    let title = req.body.title;
    let content = req.body.content;
    posts.push({title: title, content: content});
    res.redirect('/');
});
app.listen(8080);