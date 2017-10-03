router.get('/getNews', function(req, res) {
  var data = [];
  for(var i = 0;i < req.query.pageSize;i++){
    data.push("新闻"+(parseInt(req.query.page) + i));
  }
  var info = {
    status : {
      statusCode : 1,
      message : "success"
    },
    data : data
  }
  res.send(info)
})
