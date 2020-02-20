//index.js
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

//DB SETTINGS
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_PATH);
var db = (mongoose.connection);
db.once('open', function(){
  console.log('DB connected');
});
db.on('error', function(){
  console.log('DB ERROR: ', err);
});

//OTHER SETTINGS
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//ROUTES
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));

//PORT SETTING
var port=3000;
app.listen(port, '0.0.0.0', function(){
  console.log('server on! http://localhost:'+port);
});
