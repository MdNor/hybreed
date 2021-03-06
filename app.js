var express = require('express'),
    http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.use(express.logger());
});

app.get('/', function(req, res) {
  if (req.query["q"]) {
    query = req.query["q"];
    encQuery = encodeURIComponent(query);
    if (query.match(/![A-Za-z0-9]+/)) {
      console.log('Queried DuckDuckGo');
      res.redirect('http://duckduckgo.com?q=' + encQuery);
    } else {
      console.log('Queried Google');
      if (req.query['google']) {
        res.redirect('http://' + req.query['google'] + '/search?q=' + encQuery);
      } else {
        res.redirect('http://google.com.my/search?q=' + encQuery);
      }
    }
  }
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/support', function(req, res) {
  res.render('support');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
