var Horseman = require('node-horseman')
var horseman = new Horseman()


horseman
.on('consoleMessage', function(msg){
  console.log(msg)
})
.open('http://www.angeloni.com.br/super/index')
.status()
.evaluate(function(){

  var descNode = document.querySelectorAll('.descr a')
  var desc = Array.prototype.map.call(descNode, function (t) { return t.textContent })

  var valueNode = document.querySelectorAll('.price a')
  var value = Array.prototype.map.call(valueNode, function (t) { return t.textContent })

  var finalData = []
  
  for (var i=0 ; i < desc.length; i ++) {
    var item = {}
    item['desc'] = desc[i]
    item['value'] = value[i]
    finalData.push(item)
  }

  return finalData

})
.then(function(finalData){
  console.log(finalData)
})
.catch(function(err){
  console.log(err)
})
.close()